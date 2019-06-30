import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  isLoadingOne = false;
  constructor(
    private fb: FormBuilder,
    private msg: NzMessageService,
    private router: Router,
    private tokenservice: TokenService,
    private serve: LoginService
  ) { }

  ngOnInit() {
    if (this.tokenservice.getToken()) {
      this.tokenservice.clearToken();
    }
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
  formValue (parma: string): string {
    return this.validateForm.get(parma).value;
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.isLoadingOne = true;
    if (this.validateForm.status === 'VALID') {
        const param = new FormData();
        param.append('username', this.validateForm.value.userName);
        param.append('password', this.validateForm.value.password);
        this.serve.login(param).subscribe( (res: any) => {
          if (res.status === 0) {
            this.tokenservice.saveToken(res.token);
            this.router.navigate(['home']);
            this.msg.success('登录成功');
          } else {
            this.msg.error(res.message);
          }
          this.isLoadingOne = false;
        });
    }
  }

}
