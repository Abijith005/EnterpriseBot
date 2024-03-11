import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from '../../communication.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
isClicked:boolean=false

constructor(private _router:Router,
  private _communicationService:CommunicationService,
  private _ngToaster:NgToastService){}

  toggle(){
    this.isClicked=!this.isClicked
  }

  logout(){
    localStorage.clear()
    this._communicationService.offline()
    this._ngToaster.info({
      position: 'topCenter',
      duration: 2000,
      detail: "Log out",
    });
    this._router.navigate(['/auth'])

  }
}
