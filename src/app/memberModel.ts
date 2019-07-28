export class Member {
    public fname: string;
    public lname: string;
    public avatar: string;
    public email: string;
    public phone: number;
    //public techs: string [];
    constructor( fname: string,lname: string,avatar: string,email: string,phone: number) {
      this.fname=fname;
      this.lname=lname;
      this.avatar=avatar;
      this.email=email;
      this.phone=phone;
     // this.techs=techs;
    }
  }
  