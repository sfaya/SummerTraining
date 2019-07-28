import { Injectable } from '@angular/core';
import { Member } from './memberModel';
import { HttpClient} from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/map';
import { toArray, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  table: Member [] ;
 URL = 'https://taskmanager-8ec22.firebaseio.com/members.json';
  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get<Array<Member>>(this.URL);
  }

  addMember(member: Member){
    //this.members.push(member);
    return this.http.post(this.URL, member);

  }
  getMemberById(id: number)
  {
    return this.table[id];
  }
}
