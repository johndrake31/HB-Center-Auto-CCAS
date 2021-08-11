import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  private _isLogged: boolean = false;
  private _userInfo: any = [];
  private _refreshToken: any = "";
  private _username: string = "";
  private _exp: string = "";

  loggedout() {
    this.setIsLogged();
    this.setRoles([]);
    this.setToken("");
    this.setRefreshToken("");
    this.setUsername("");
    this.setExp("");
    sessionStorage.setItem("isLogged", "false");
  }



  getUsername(): string {
    return this._username;
  }
  setUsername(value: string) {
    this._username = value;
  }

  setIsLogged() {
    this._isLogged = !this._isLogged;
    sessionStorage.setItem("isLogged", "true");
  }

  getIsLogged() {
    if (sessionStorage.getItem("isLogged") === "true") {
      this._isLogged = true;
    } else { this._isLogged = false; }
    return this._isLogged;
  }

  setRefreshToken(data: any) {
    this._refreshToken = data;
  }
  getRefreshToken() {
    return this._refreshToken;
  }

  setToken(data: any) {
    sessionStorage.setItem("token", data);
  }
  getToken(): any {
    return sessionStorage.getItem("token");
  }

  setRoles(data: any) {
    this._userInfo = data;
  }

  getRoles() {
    return this._userInfo;
  }

  setExp(val: string) {
    this._exp = val;
  }
  getExp() {
    return this._exp;
  }

}
