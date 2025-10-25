import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 
  }


  login(email:string, password:string): Observable<any> {
    type userAuth = { email: string, password: string };
    let user: userAuth = { email, password };
    return this.http.post<any>('http://localhost:8080/api/auth/login', user);

  }
}
