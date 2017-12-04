import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

import { FormComponent }  from './form.component';
import { CreationMemoComponent } from  './creationmemo.component';
import { SigninComponent } from './signin.component'
import { MemoComponent } from './memo.component'
import { MemoService } from './memo.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot([
   {path:'', redirectTo: '/signin', pathMatch: 'full'},
   {path:'signin', component: SigninComponent },
   {path:'AddMemo', component: CreationMemoComponent},
   {path:'memo', component: MemoComponent}
  ])
],
  declarations: [ FormComponent, CreationMemoComponent, SigninComponent, MemoComponent ],
  providers: [MemoService],
  bootstrap:    [ FormComponent ]
})
export class AppModule { }
