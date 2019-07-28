import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/member.service';
import { Member } from 'src/app/memberModel';
import {catchError, map} from 'rxjs/operators';

@Component({
  selector: 'app-memberslist',
  templateUrl: './memberslist.component.html',
  styleUrls: ['./memberslist.component.css']
})
export class MemberslistComponent implements OnInit {
  members: Array<Member> = new Array<Member>();
  constructor(private ms: MemberService) {
   
   }
  //members: Member[]=[];
  ngOnInit() {
    this.ms.getMembers().subscribe(
      (res) => {this.members = res;
      console.log(this.members);}
      );

  }

}
