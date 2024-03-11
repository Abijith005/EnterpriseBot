import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IteamData, IteamDataUpdate } from 'src/app/interfaces/interfaces';
import { Subject, takeUntil } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SubscriptionComponent } from '../subscription/subscription.component';
import { CommunicationService } from '../../communication.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  teamData: IteamData[] = [];

  private _ngUnsbscribe$ = new Subject<void>();

  constructor(
    private _userServices: UserService,
    private _matDialoge: MatDialog,
    private _communicationServices: CommunicationService,
    private _ngToaster: NgToastService
  ) {}

  ngOnInit(): void {
    this._userServices
      .getTeams()
      .pipe(takeUntil(this._ngUnsbscribe$))
      .subscribe((res) => {
        this.teamData = res.teams;
      });

    this._communicationServices
      .receiveNotification()
      .pipe(takeUntil(this._ngUnsbscribe$))
      .subscribe((data: IteamDataUpdate) => {
        if (data.field !== 'players') {
          this.teamData = this.teamData.map((item) => {
            if (item._id === data.teamId) {
              return { ...item, [data.field]: data.name as string };
            }
            return item;
          });
        }
        console.log(data);
        this._ngToaster.success({
          position: 'topCenter',
          duration: 4000,
          detail: data.message,
        });
      });
  }

  subscribeTeam(id: string) {
    this._matDialoge.open(SubscriptionComponent, {
      width: '450px',
      height: '330px',
      disableClose: true,
      data: id,
    });
  }

  ngOnDestroy(): void {
    this._ngUnsbscribe$.next();
    this._ngUnsbscribe$.complete();
  }
}
