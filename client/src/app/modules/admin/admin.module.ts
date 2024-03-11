import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AddTeamComponent } from './add-team/add-team.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ChangeCaptainComponent } from './change-captain/change-captain.component';
import { ChangeCoachComponent } from './change-coach/change-coach.component';
import { AddPlayerComponent } from './add-player/add-player.component';

@NgModule({
  declarations: [NavBarComponent, HomeComponent, AddTeamComponent, ChangeCaptainComponent, ChangeCoachComponent, AddPlayerComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
})
export class AdminModule {}
