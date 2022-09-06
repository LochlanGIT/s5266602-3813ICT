import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}
import { AppComponent} from "../app.component";

const BACKEND_URL = 'http://localhost:3000';

class User {
  username: string = "";
  password: any;
}

class NewUser {
  username: any;
}

@Component({
  providers: [AppComponent],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {username: "", password: ""};
  newuser: NewUser = {username: ""};
  admin = false;
  groupassis = false;

  constructor(private router: Router, private httpClient: HttpClient, private comp: AppComponent) {}
  ngOnInit() {}
  public loginfunc() {
    this.httpClient.post(BACKEND_URL + '/login', this.user, httpOptions)
      .subscribe((data: any) => {
        if (data.ok) {
          console.log(this.user.username)
          if (this.user.username == "groupassis") {
            this.groupassis = true;
            sessionStorage.setItem('username', this.user.username);
            sessionStorage.setItem('groupassis', String(this.groupassis));
            this.router.navigateByUrl('roomgrouplist/'+this.user.username);
          } else {
            this.admin = true;
            sessionStorage.setItem('admin', String(this.admin));
            sessionStorage.setItem('username', this.user.username);
            this.router.navigateByUrl('roomgrouplist/'+this.user.username);
          }

        } else {
          alert('Sorry, username or password is not valid');
        }
      });
  }

  loginfunc2() {
    if (this.newuser.username) {
      sessionStorage.setItem('username', this.newuser.username);
      this.router.navigateByUrl('roomgrouplist/'+this.newuser.username);
    } else {
      alert('Please enter a valid value.')
    }
  }
}
