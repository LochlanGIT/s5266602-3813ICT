import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {
  username = sessionStorage.getItem('username');

  constructor(private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit(): void {
  }

}
