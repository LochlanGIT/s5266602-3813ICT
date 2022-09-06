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
  createdgroup = false;
  noarray = [""];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
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
      this.noarray.push("");
      this.createdgroup = true;
    } else {
      alert('Please enter a valid value.')
    }
  }

  DelBtn = delIndex => this.noarray.splice(delIndex, 1);


}
