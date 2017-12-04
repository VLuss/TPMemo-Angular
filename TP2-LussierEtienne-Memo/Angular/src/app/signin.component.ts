import {Component, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {ActivatedRoute} from '@angular/router';

import 'rxjs/add/operator/toPromise';
import {MemoService} from "./memo.service";

@Component({
    selector: 'signin',
    templateUrl: `./signin.component.html`,
})
export class SigninComponent {
    emailIn ="";
    emailUp = "";
    passIn = "";
    passUp="";

    constructor(private route:ActivatedRoute, private service:MemoService ) { }
    
    signIn():boolean{
      //Verifier le profil
        this.service.login(this.emailIn,this.passIn);
      //redirectionner vers c'est message
    
        alert(this.emailIn + " " + this.passIn);
        return true;
    }
    
    signUp():void{

      // Ajouter un Utilisateur
        this.service.register(this.emailUp,this.passUp);
      //message de success
        alert(this.emailUp + " " + this.passUp);
    }
}
