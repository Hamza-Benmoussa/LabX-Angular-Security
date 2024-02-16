import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Subscription} from "rxjs";
import {LoggerUser} from "../../entity/logger-user.model";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit , OnDestroy {

  userSub !: Subscription;
  isAuthenticated = false;
  isRespo = false;
  isPreleve = false;
  isTech = false;
  name:string|undefined;
  constructor(private  authService : AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(loggedUser =>{
      this.isAuthenticated =!!loggedUser;
      if (!this.isAuthenticated){
        this.initializeState();
      }
      else if(!!loggedUser){
        this.setRole(loggedUser);
        this.name=loggedUser?.username
      }
    })
  }

  logout() {
    this.authService.logout();
  }
  setRole(loggedUser : LoggerUser | null){
    if (loggedUser?.roles.includes("RESPONSABLE_LABORATOIRE"))
      this.isRespo = true
    else if (!!loggedUser?.roles.includes("PRELEVEUR")) {
      this.isPreleve =true;
    }
    else if (!!loggedUser?.roles.includes("TECHNICIEN")) {
      this.isTech =true;
    }
  }

  initializeState(){
    this.isRespo = false;
    this.isTech = false;
    this.isPreleve = false;
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }


}
