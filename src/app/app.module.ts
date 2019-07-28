import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { from } from 'rxjs';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MemberslistComponent } from './members/memberslist/memberslist.component';
import { MemberItemComponent } from './members/memberslist/member-item/member-item.component';
import { MemberCvComponent } from './members/member-cv/member-cv.component';
import { MemberService } from './member.service';



@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    TechnologiesComponent,
    SignUpComponent,
    MemberslistComponent,
    MemberItemComponent,
    MemberCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
