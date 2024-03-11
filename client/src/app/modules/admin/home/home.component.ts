import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Subject, takeUntil } from 'rxjs';
import { IteamData } from 'src/app/interfaces/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { AddPlayerComponent } from '../add-player/add-player.component';
import { ChangeCaptainComponent } from '../change-captain/change-captain.component';
import { ChangeCoachComponent } from '../change-coach/change-coach.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  teamData: IteamData[] = [];
  private _ngUnsbscribe = new Subject<void>();

  constructor(
    private _adminService: AdminService,
    private _matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._adminService
      .getTeams()
      .pipe(takeUntil(this._ngUnsbscribe))
      .subscribe((res) => {
        this.teamData = res.teams;
        console.log(res);
      });
  }

  addPlayer(id:string) {
    this._matDialog.open(AddPlayerComponent, {
      width: '450px',
      height: '250px',
      disableClose: true,
      data:id
    });
  }

  changeCaptain(id:string){
    this._matDialog.open(ChangeCaptainComponent,{
      width: '450px',
      height: '250px',
      disableClose: true,
      data:id
    })
  }

  changeCoach(id:string){
    this._matDialog.open(ChangeCoachComponent,{
      width: '450px',
      height: '250px',
      disableClose: true,
      data:id
    })
  }
  ngOnDestroy(): void {
    this._ngUnsbscribe.next();
    this._ngUnsbscribe.complete();
  }
}
