import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/member.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Member } from 'src/app/memberModel';

@Component({
  selector: 'app-member-cv',
  templateUrl: './member-cv.component.html',
  styleUrls: ['./member-cv.component.css']
})
export class MemberCvComponent implements OnInit {
  member: Member;
  id: number;

  constructor(private memberService: MemberService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          //this.member = this.memberService.getMemberById(this.id);
        }
      );
  }

}
