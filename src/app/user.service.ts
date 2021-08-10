import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  private isLogged: boolean;
  private userInfo: any = [];
  private token: any = "";
  private refreshToken: any = "";

  setIsLogged() {
    this.isLogged = true;
  }

  getIsLogged() {
    return this.isLogged;
  }

  setRefreshToken(data: any) {
    this.refreshToken = data;
  }
  getRefreshToken() {
    return this.refreshToken;
  }

  setToken(data: any) {
    this.token = data;
  }
  getToken() {
    return this.token;
  }

  setRoles(data: any) {
    this.userInfo = data;
  }

  getRoles() {
    return this.userInfo;
  }


}
