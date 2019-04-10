import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Shastatek Private Limited';
  public userloged;
  public userlogedout;
  userlist: any;
  user_name: any;
  ngOnInit(){
    if(localStorage.getItem("currentUser") != ''){
      this.userloged = false;
      this.userlogedout = true;
      this.userlist = JSON.parse(localStorage.getItem("currentUser"));
      this.user_name = (this.userlist.name);
    }else{
      this.userloged = true;
      this.userlogedout = false;
    }
  }
}
