import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { UserRoutingModule } from './user-routing.module';
import { SubscriptionComponent } from './subscription/subscription.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
