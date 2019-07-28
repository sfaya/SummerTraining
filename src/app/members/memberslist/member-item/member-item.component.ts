import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/memberModel';

@Component({
  selector: 'app-member-item',
  templateUrl: './member-item.component.html',
  styleUrls: ['./member-item.component.css']
})
export class MemberItemComponent implements OnInit {
  @Input() item: Member;
  @Input() indice: number;
  constructor() { }

  ngOnInit() {
  }

}
