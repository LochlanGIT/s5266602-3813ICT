import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-knownusers',
  templateUrl: './knownusers.component.html',
  styleUrls: ['./knownusers.component.css']
})
export class KnownusersComponent implements OnInit {

  login = sessionStorage.getItem("username");
  isSuper = false;

  namearray = [""];
  USERS = [
    {
      "username": "super",
      "password": "super",
      "email": "superuser@email.com",
      "id": "1",
      "role": "superadmin"
    },
    {
      "username": "groupadmin",
      "password": "groupadmin",
      "email": "groupadmin@email.com",
      "id": "2",
      "role": "groupadmin"
    },
    {
      "username": "groupassis",
      "password": "groupassis",
      "email": "groupassis@email.com",
      "id": "3",
      "role": "groupassis"
    }
  ]
  userid = JSON.stringify(this.USERS)

  identification: any;
  newuser: any;
  newemail: any;
  newuserrole: any;
  newusercreated: any;

  constructor() { }

  delgroup(delIndex) {
    this.namearray.splice(delIndex, 1);
  }

  ngOnInit(): void {
    this.delgroup(0)
    if (this.login == "super") {
      this.isSuper = true;
    }
  }

  isvalid() {
    if (this.USERS.find(id => id.id == this.identification)) {
      return false;
    } else {
      return true;
    }
  }

  createuser() {
    if (this.isvalid()) {
      this.newusercreated = {username:this.newuser, email:this.newemail, id:this.identification, role:this.newuserrole};
      this.USERS.push(this.newusercreated);
    } else {
      alert('ID already in use, please use a different ID.')
    }
  }

}
