import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  private _isLogged: boolean = false;
  private _isAdmin: boolean = false;
  private _userInfo: any = [];
  private _refreshToken: any = "";
  private _username: string = "";
  private _exp: string = "";

  setIsAdmin() {
    this._isAdmin = !this._isAdmin;
  }
  getIsAdmin() {
    return this._isAdmin;
  }


  getUserInfos(): Observable<any> {
    const headers = { 'Authorization': "Bearer " + this.getToken() };
    return this.http.get<any>("https://powerful-badlands-63524.herokuapp.com/api/user/show", { headers })
  }
  getUserInfosAdmin(id: number): Observable<any> {
    const headers = { 'Authorization': "Bearer " + this.getToken() };
    return this.http.get<any>("https://powerful-badlands-63524.herokuapp.com/api/user/index/" + id, { headers })
  }



  updateUserInfos(id: number, userData: any): Observable<any> {
    const headers = { 'Authorization': "Bearer " + this.getToken() };
    return this.http.patch<any>("https://powerful-badlands-63524.herokuapp.com/api/user/edit/" + id, userData, { headers })
  }
  // ADMIN
  addUserPro(userData: any): Observable<any> {
    const headers = { 'Authorization': "Bearer " + this.getToken() };
    return this.http.post<any>("https://powerful-badlands-63524.herokuapp.com/api/register", userData, { headers })
  }

  getUsersForAdmin(): Observable<any> {
    const headers = { 'Authorization': "Bearer " + this.getToken() };
    return this.http.get<any>("https://powerful-badlands-63524.herokuapp.com/api/user/index", { headers })
  }
  deleteUserForAdmin(id: number): Observable<any> {
    const headers = { 'Authorization': "Bearer " + this.getToken() };
    return this.http.delete<any>("https://powerful-badlands-63524.herokuapp.com/api/user/delete/" + id, { headers })
  }



  getNewToken(): Observable<any> {
    let myJsonRefresh = JSON.stringify(this.getRefreshToken())
    console.log(myJsonRefresh);

    return this.http.post<any>("https://powerful-badlands-63524.herokuapp.com/api/token/refresh", myJsonRefresh)
  }


  setIsLogged() {
    this._isLogged = !this._isLogged;

  }

  loggedout() {
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



  getIsLogged() {
    if (sessionStorage.getItem("isLogged") === "true") {
      this._isLogged = true;
    } else { this._isLogged = false; }
    return this._isLogged;
  }

  setRefreshToken(data: any): Observable<any> {
    return this._refreshToken = data;
  }
  getRefreshToken() {
    return { "refresh_token": this._refreshToken };
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
