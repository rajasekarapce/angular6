import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { GameService } from '../../game.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  angForm: FormGroup;
  msg: string = null;
  user:any;
  name = 'Angular 6';
  url:any;
  selectedFile: File = null;
  userlist:any;
  userid:any;
  userimg:any;
  public img1 = false;
  public img2 = true;

  constructor(private formBuilder: FormBuilder,  
              private router: Router, 
              private route: ActivatedRoute, 
              private fb: FormBuilder,
              private service: GameService,
              private http: HttpClient) {
        this.profileUpdate();
        this.user = [];
  }

  onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0];
    if (event.target.files && event.target.files[0]) {
     
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (event) => { 
        this.url = event.target['result'];
      }
      
      this.img1 = true;
      this.img2 = false;
    }
  }

  profileUpdate() {
    this.angForm = this.fb.group({
            name: ['', Validators.required ],
            username: ['', Validators.required ],
            password: ['', Validators.required],
            userimg: ['', Validators.required]
        });
  }

  updateuser(name, username, password) {
      this.route.params.subscribe(params => {
      this.service.updateuser(name, username, password);
      this.msg = 'Successfully updated !';
      
      this.userlist = JSON.parse(localStorage.getItem("currentUser"));
      this.userid = (this.userlist.id);

      const fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name);
      this.http.post('http://localhost:8090/learn/angular/updateuser.php?edit='+this.userid, fd)
      .subscribe(res => {
        console.log(res);
      });
    
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
          this.service.singleuser().subscribe(res => {
            this.user = res;
            this.userimg = 'http://localhost:8090/learn/angular/img/'+this.user.userimage;
        });
    });

    if(localStorage.getItem("currentUser") == ''){
        location.href='/login';
    }
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
    }
  }
}
