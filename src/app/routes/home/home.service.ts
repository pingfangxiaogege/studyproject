import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    constructor(private http: HttpClient) {

    }
    getMenuList() {
       return this.http.get('/menu/list');
    }
}