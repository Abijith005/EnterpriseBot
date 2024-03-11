import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddTeamComponent } from '../add-team/add-team.component';
import { Subject } from 'rxjs';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  isClicked: boolean = false;

  private _ngUnsbscribe = new Subject<void>();

  constructor(
    private _router: Router,
    private _matDialog: MatDialog,
    private _ngToaster: NgToastService
  ) {}

  addTeam() {
    this._matDialog.open(AddTeamComponent, {
      width: '450px',
      height: '410px',
      disableClose: true,
    });
  }

  toggle() {
    this.isClicked = !this.isClicked;
  }

  logout() {
    localStorage.clear();
    this._ngToaster.info({
      position: 'topCenter',
      duration: 2000,
      detail: "Log out",
    });
    this._router.navigate(['/auth']);
  }

  ngOnDestroy(): void {
    this._ngUnsbscribe.next();
    this._ngUnsbscribe.complete();
  }
}
