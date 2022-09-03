import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}
import { AppComponent} from "../app.component";

const BACKEND_URL = 'http://localhost:3000';


@Component({
  providers: [AppComponent],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";

  constructor(private router: Router, private httpClient: HttpClient, private comp: AppComponent) {}
  ngOnInit() {}
  public loginfunc() {
    this.httpClient.post(BACKEND_URL + '/login', this.username, httpOptions)
      .subscribe((data: any) => {
        if (data.ok) {
          // sessionStorage.setItem('username', this.userpwd.username);
          // sessionStorage.setItem('userbirthdate', this.userobj.userbirthdate);
          // sessionStorage.setItem('userage', (2022-this.userobj.userbirthdate.slice(0, 4)).toString());
          this.router.navigateByUrl('chat');
        } else {
          alert('Sorry, username or password is not valid');
        }
      });
  }
}
