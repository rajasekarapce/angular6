import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { GameService } from '../../game.service';
import { Game } from './Game';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  games: any;

  constructor(private router: ActivatedRoute, private data: GameService, private route: Router) { 
    this.games = [];
  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.data.getGames()
        .then((games:any) => {
          this.games = games.game;
       });
   });

    if(localStorage.getItem("currentUser") == ''){
        location.href='/login';
    }
  }

  deleteGame(id) {
    this.data.deleteGame(id);
    //this.route.navigate(['index']);
    location.reload();
  }
  
}
