import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { GameService } from '../../game.service';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Game';
  angForm: FormGroup;

  constructor(private gameservice: GameService, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }

  addGame(name, price) {
    this.gameservice.addGame(name, price);
    location.href='\index';
  }

  ngOnInit() {

    if(localStorage.getItem("currentUser") == ''){
        location.href='/login';
    }
  }

}
