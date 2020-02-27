import { Component, OnInit, Input } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Prizes } from '../Prizes';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessComponentComponent } from '../success-component/success-component.component';

@Component({
  selector: 'app-add-prize',
  templateUrl: './add-prize.component.html',
  styleUrls: ['./add-prize.component.scss'],
})
export class AddPrizeComponent implements OnInit {
  prizeForm: FormGroup;
  isMonetary: boolean;
  @Input() gameID: string;

  prizeModel = new Prizes('', '', '', 0, true, true);
  constructor(private gameService: GamesService, private snackBar: MatSnackBar) {this.isMonetary = false; }

  ngOnInit() {
    console.log(this.gameID);
  }
  public onSubmit() {
    this.gameService.addPrizes(
      this.prizeModel.prizeID,
      this.gameID,
      this.prizeModel.prizeName,
      this.prizeModel.prizeValue,
      this.isMonetary,
      true
    );
    this.snackBar.openFromComponent(SuccessComponentComponent, {
      duration: 5000
    });
    this.gameService.getPrizes();
  }
}
