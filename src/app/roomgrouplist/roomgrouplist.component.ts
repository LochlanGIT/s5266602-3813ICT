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

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (this.admin === "true") {
      this.isAdmin = true;
    }
  }

  sendtoroom() {
    this.router.navigateByUrl('roomlist/:groupname/'+this.username);
  }

  creategroup() {

  }

}
