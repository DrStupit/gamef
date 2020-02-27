import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddGameComponent } from './game/add-game.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NewgameComponent } from './newgame/newgame.component';
import { ResultGameComponent } from './result-game/result-game.component';
import { GameScreenComponent } from './game-screen/game-screen.component';


const routes: Routes = [
  { path: '', component: GameScreenComponent },
  { path: 'game', component: AppComponent },
  { path: 'admin', component: AddGameComponent },
  { path: 'transactions', component: TransactionsComponent},
  { path: 'new-game', component: NewgameComponent},
  { path: 'results', component: ResultGameComponent},
  { path: 'game/play', component: GameScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
