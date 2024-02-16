import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest, LoginResponse} from "../entity/login.model";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {JwtHelperService} from '@auth0/angular-jwt';
import {LoggerUser} from "../entity/logger-user.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelperService = new JwtHelperService();
  user = new BehaviorSubject<LoggerUser | null>(null);
  tokenExpirationTimer:any;
  constructor(private http: HttpClient , private router : Router) { }


  public login(user: LoginRequest): Observable<LoginResponse>{
    const formData  = new FormData();
    formData.append('username' , user.username);
    formData.append('password', user.password);
    return this.http.post<LoginResponse>(environment.backendHost+"/login",formData)
  }
  saveToken(jwtToken : LoginResponse)
  {
    const decodedAccessToken = this.jwtHelperService.decodeToken(jwtToken.accessToken);
    const loggedUser = new LoggerUser(decodedAccessToken.sub, decodedAccessToken.roles, jwtToken.accessToken, this.getExpirationDate(decodedAccessToken.exp));
    this.user.next(loggedUser);
    this.autoLogout(this.getExpirationDate(decodedAccessToken.exp).valueOf()-new Date().valueOf());
    localStorage.setItem("userData" , JSON.stringify(loggedUser));
    this.redirectLoggedInUse(decodedAccessToken, jwtToken.accessToken);
  }
  redirectLoggedInUse(decodedToken: any, accessToken: string){
    if(decodedToken.roles.includes("PRELEVEUR")) this.router.navigateByUrl("/patient");
    else if(decodedToken.roles.includes("RESPONSABLE_LABORATOIRE")){
      this.router.navigateByUrl("/afficher-utilisateur")
    }
    else if(decodedToken.roles.includes("TECHNICIEN")){
      this.router.navigateByUrl("/analyse")
    }
  }

  autoLogin(){
    const userData : {
      username:string,
      roles:string[],
      _token:string,
      _expiration:Date
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) return;
    const loadedUser = new LoggerUser(userData.username,userData.roles,userData._token,new Date(userData._expiration))
    if (loadedUser.token){
      this.user.next(loadedUser);
      this.autoLogout(loadedUser._expiration.valueOf()-new Date().valueOf());
    }
  }
  logout(){
    localStorage.clear();
    this.user.next(null);
    this.router.navigate(['/'])
    if (this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }
  getExpirationDate(exp : number){
    const  date = new Date(0);
    date.setUTCSeconds(exp)
    return date;
  }
  autoLogout(expirationDuration : number){
    this.tokenExpirationTimer = setTimeout(()=>{
      this.logout();
    },expirationDuration)

  }
}

