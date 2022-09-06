import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {
  username = sessionStorage.getItem('username');
  admin = sessionStorage.getItem('admin')
  groupassis = sessionStorage.getItem('groupassis')
  groupname = sessionStorage.getItem('groupname')
  isAdmin = false;
  isGroupAssis = false;
  channelname: any;
  channelncurrent: any;
  namearray = [""];

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  delchannel(delIndex) {
    this.namearray.splice(delIndex, 1);
  }

  ngOnInit(): void {
    this.delchannel(0);
    if (this.admin === "true") {
      this.isAdmin = true;
    }
    if (this.groupassis === "true") {
      this.isGroupAssis = true;
    }
  }

  sendtoroom() {
    this.router.navigateByUrl('roomgrouplist/'+this.groupname+'/roomlist/'+this.channelname+'/chat/'+this.username);
    sessionStorage.setItem('channelname', this.channelname);
  }

  createchannel() {
    if (this.channelname) {
      this.channelncurrent = this.channelname;
      this.namearray.push(this.channelncurrent);
    } else {
      alert('Please enter a valid value.')
    }
  }
}
