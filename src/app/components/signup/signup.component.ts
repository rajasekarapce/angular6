import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { GameService } from '../../game.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  msg: string = null;
  users: any;
  
    constructor(private formBuilder: FormBuilder,  private router: Router, private route: ActivatedRoute, private gameservice: GameService) {
      this.users = [];
    }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.route.params.subscribe((params) => {
      this.gameservice.getUserList()
        .then((users:any) => {
          this.users = users.user;
       });
   });

   if(localStorage.getItem("currentUser") != ''){
        location.href='/index';
    }

  }

  get f() { return this.signupForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
        return;
    }

    this.loading = true;
    this.msg = 'Successfully registered !';
    this.gameservice.signUp(this.f.name.value, this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.error = error;
                this.loading = false;
                this.msg = '';
            });
  }

}
