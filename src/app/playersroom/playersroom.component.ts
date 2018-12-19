import { Component, OnInit } from '@angular/core';
import { Player } from '../player.module/player';

@Component({
  selector: 'app-playersroom',
  templateUrl: './playersroom.component.html',
  styleUrls: ['./playersroom.component.css']
})
export class PlayersroomComponent implements OnInit {

    displayDialog: boolean;

    player: Player = new Player();

    selectedPlayer: Player;

    newPlayer: boolean;

    players: Player[];

    cols: any[];

    add: number;

  constructor() { 
    this.players = [];
  }

  ngOnInit() {
    this.cols = [
      {field: 'name', header: 'Name'},
      {field: 'score', header: 'Score'}
    ];
      
  }

  showDialogToAdd() {
    this.newPlayer = true;
    this.player = new Player();
    this.displayDialog = true;
}

save() {
    const players = [...this.players];
    if (this.newPlayer) {
        players.push(this.player);
    } else {
        this.player.score = this.player.score+this.add;
        players[this.findSelectedPlayerIndex()] = this.player;
        this.add = 0;
    }
    this.players = players;
    this.player = null;
    this.displayDialog = false;
}

delete() {
    const index = this.findSelectedPlayerIndex();
    this.players = this.players.filter((val, i) => i !== index);
    this.player = null;
    this.displayDialog = false;
}

onRowSelect(event) {
    this.newPlayer = false;
    this.player = {...event.data};
    this.displayDialog = true;
}

onClear(){
    this.players = [];
}

findSelectedPlayerIndex(): number {
    return this.players.indexOf(this.selectedPlayer);
}


}
