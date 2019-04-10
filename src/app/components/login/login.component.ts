import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { GameService } from '../../game.service';

@Component({templateUrl: 'login.component.html'})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private gameservice: GameService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
       // this.gameservice.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        if(localStorage.getItem("currentUser") != ''){
            location.href='/index';
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.gameservice.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    if(localStorage.getItem("currentUser") != ''){
                        //this.router.navigate([this.returnUrl]);
                        location.href='/index';
                    }else{
                        this.error = 'Invalid Username/Password';
                        this.loading = false;
                    }
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }
}