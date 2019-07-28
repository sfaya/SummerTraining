import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MemberslistComponent } from './members/memberslist/memberslist.component';
import { MemberCvComponent } from './members/member-cv/member-cv.component';


const routes: Routes = [
  {
    path: 'members',
    component: MembersComponent,
    children: [
      {
        path: 'membersList',
        component: MemberslistComponent
      },
      {
        path: ':id',
        component: MemberCvComponent
      }
    ]
  },
  {
    path: 'technologies',
    component: TechnologiesComponent
  },
  {
    path: 'acc',
    component: SignUpComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
