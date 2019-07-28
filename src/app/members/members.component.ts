import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { Member } from '../memberModel';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  selectedMember: Member;
  route: Router;
  constructor(private memberService: MemberService) { }

  ngOnInit() {
   /* this.memberService.memberSelected
      .subscribe(
        (member: Member) => {
          this.selectedMember = member;
        }
      );*/
  }


  viewTechs() {
    this.route.navigate(['technologies']);
  }
}
