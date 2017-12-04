/**
 * Created by 1543677 on 2017-11-20.
 */
import {Component, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'memo',
    templateUrl: `./add.component.html`,
})
export class CreationMemoComponent {
      text = "";
      titre = "";
      public:boolean;



}
