import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-roomgrouplist',
  templateUrl: './roomgrouplist.component.html',
  styleUrls: ['./roomgrouplist.component.css']
})
export class RoomgrouplistComponent implements OnInit {
  username = sessionStorage.getItem('username');
  admin = sessionStorage.getItem('admin')
  isAdmin = false;
  groupname: any;
  groupncurrent: any;
  namearray = [""];

  constructor(private route: ActivatedRoute, private router: Router) { }

  delgroup(delIndex) {
    this.namearray.splice(delIndex, 1);
  }

  ngOnInit(): void {
    this.delgroup(0)
    if (this.admin === "true") {
      this.isAdmin = true;
    }
  }

  sendtogroup() {
    this.router.navigateByUrl('roomgrouplist/'+this.groupname+'/roomlist/'+this.username);
    sessionStorage.setItem('groupname', this.groupname);
  }

  creategroup() {
    if (this.groupname) {
      this.groupncurrent = this.groupname;
      this.namearray.push(this.groupncurrent);
    } else {
      alert('Please enter a valid value.')
    }
  }



}
