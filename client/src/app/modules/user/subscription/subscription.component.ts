import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from '../user.service';
import { IteamSubscriptionData } from 'src/app/interfaces/interfaces';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
})
export class SubscriptionComponent implements OnDestroy {
  subscriptionData: IteamSubscriptionData = {
    captain: false,
    coach: false,
    players: false,
  };

  private _ngUnsbscribe = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) private id: string,
    private _matdialogeRef: MatDialogRef<SubscriptionComponent>,
    private _ngToaster: NgToastService,
    private _userService: UserService
  ) {}

  submit() {
    if (
      !this.subscriptionData.captain &&
      !this.subscriptionData.coach &&
      !this.subscriptionData.players
    ) {
      console.log('thid satisfied');

      this._ngToaster.error({
        detail: 'At least one subscription required',
        duration: 2000,
        position: 'topCenter',
      });
      return;
    }

    this._userService
      .subscribeTeam(this.subscriptionData, this.id)
      .pipe(takeUntil(this._ngUnsbscribe))
      .subscribe((res) => {
        this._ngToaster.success({
          position: 'topCenter',
          duration: 2000,
          detail: res.message,
        });
        this.close()
      });
  }

  close() {
    this._matdialogeRef.close();
  }

  ngOnDestroy(): void {
    this._ngUnsbscribe.next();
    this._ngUnsbscribe.complete();
  }
}
