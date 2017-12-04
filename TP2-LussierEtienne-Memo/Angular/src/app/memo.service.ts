/**
 * Created by 1543677 on 2017-12-01.
 */
import { Injectable } from '@angular/core';
import {Http, URLSearchParams, Headers, RequestOptions} from "@angular/http";
import {Memo} from './memo'

@Injectable()
export class MemoService {
    listmemo:Memo[];


    constructor( private http:Http) {}

    getMemo():Promise<Memo[]>{
      let token = localStorage.getItem('Token');
      let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + token
      });
      let options = new RequestOptions({headers: headers});
      this.http.get("http://localhost:8557/api/Memos").toPromise()
        .then(response => {
          console.log(response.json());
          this.listmemo = response.json();
        })
      return Promise.resolve(this.listmemo);
    }

    AddMemo(memo:Memo):void{

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({headers: headers});
      this.http.post("http://localhost:8557/api/Memos", JSON.stringify(memo), options).toPromise()
        .then(r => this.getMemo());

    }

    DeleteMemo(id:string):void{

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({headers: headers});
      this.http.delete("http://localhost:8557/api/Memos",id).toPromise()
        .then(r => this.getMemo());

    }


  register(email:string, pass:string): void {
    let data = {
      Email: email,
      Password: pass,
      ConfirmPassword: pass
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});

    this.http.post('http://localhost:8557/api/Account/Register', JSON.stringify(data), options).toPromise()
      .then(response => { });
  }

  login(email:string, pass:string): void {
    let body: URLSearchParams = new URLSearchParams()
    body.set('grant_type', 'password');
    body.set('username', email);
    body.set('password', pass);

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({headers: headers});
    this.http.post('http://localhost:8557/Token', body, options).toPromise()
      .then(response => {
        console.log(response.json());
        localStorage.setItem('Token', response.json().access_token);
      });
  }

  call(): void {
    let token = localStorage.getItem('Token');
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + token
    });
    let options = new RequestOptions({headers: headers});
    this.http.get('http://localhost:8557/api/Memos', options).toPromise()
      .then(response => {
        console.log(response.json());
      });
  }

  logout(): void {
    localStorage.removeItem('Token');
  }



}
