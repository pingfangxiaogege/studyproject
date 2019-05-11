import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  constructor(private fb: FormBuilder, private msg: NzMessageService, private router: Router) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
  formValue (parma) {
    return this.validateForm.get(parma).value;
  }
  submitForm(): void {
    console.log( this.validateForm, 'asd');
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
        this.router.navigate(['.home'])
      }
    }
    
  }

}
