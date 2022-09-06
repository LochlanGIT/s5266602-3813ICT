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
  groupname = sessionStorage.getItem('groupname')
  isAdmin = false;
  channelname: any;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    if (this.admin === "true") {
      this.isAdmin = true;
    }
  }

  sendtoroom() {
    this.router.navigateByUrl('roomgrouplist/'+this.groupname+'/roomlist/'+this.channelname+'/chat/'+this.username);
    sessionStorage.setItem('channelname', this.channelname);
  }

  createchannel() {
    if (this.channelname) {

    } else {
      alert('Please enter a valid value.')
    }
  }
}
