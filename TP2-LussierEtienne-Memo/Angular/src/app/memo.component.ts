import {Component, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import { Memo } from './memo';

import 'rxjs/add/operator/toPromise';
import {MemoService} from "./memo.service";

@Component({
    selector: 'memo',
    templateUrl: `./memo.component.html`,
})
export class MemoComponent {
    //changer pour des mémos
    listeMemo: Memo[] = [];
    listeMemoPublic: Memo[]= [];

    constructor(private http:Http, private service:MemoService){ }

    list():void{

        //this.listeMemo  = this.service.getMemo();
    }

    listpublic():void{

        //this.listeMemo  = this.service.getMemo();

    }
}
