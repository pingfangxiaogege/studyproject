import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpClient) {

    }
    login(param) {
       return this.http.post('/user/login', param);
    }
}
