import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../memberModel';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
@Input() myColor = 'red';
  members: Member[];
  
  Fn = 'Fname';
  Ln = 'Lname';
  email = 'email@gmail.com';
  tel = 123456789;
  avatar = '';
  techs = [];
  newtech = '';
  //member: Member;
  constructor(private memberS: MemberService) { }

  ngOnInit() {
  }
AddTech() {
  this.techs.push(this.newtech);
}

AddMember() {
  
let member = new Member(this.Fn, this.Ln, this.avatar, this.email, this.tel );

  this.memberS.addMember(member).subscribe(
  (response) => console.log(response),
  (error) => console.log(error)
);

}


}
