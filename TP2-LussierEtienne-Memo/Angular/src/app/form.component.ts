import {Component, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import { Url } from 'url';

@Component({
  selector: 'my-form',
  templateUrl: `./form.component.html`,
})
export class FormComponent implements OnInit{
  newArtist: string = '';
  artists: string[] = [];

  constructor(private http: Http) { }

  ngOnInit(): void {
    this.getArtists();
  }

  add(): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});
    this.http.post("http://localhost:8557/api/Values", JSON.stringify(this.newArtist), options).toPromise()
      .then(r => this.getArtists());
  }

  getArtists(): void {
    this.http.get("http://localhost:8557/api/Values").toPromise()
      .then(response => {
        console.log(response.json());
        this.artists = response.json();
      });
  }
}
