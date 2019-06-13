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
    if (this.validateForm.status === 'VALID') {
      if (this.formValue('userName') !== 'admin') {
        this.msg.error('您输入的用户名不存在！');
      } else if (this.formValue('password') !== '1234') {
        this.msg.error('您密码输入不正确！');
      } else {
        this.serve.getToken().subscribe( res => {
          console.log(res, 'ras')
        })
        this.tokenservice.saveToken('a');
      }
    }
    
  }

}
