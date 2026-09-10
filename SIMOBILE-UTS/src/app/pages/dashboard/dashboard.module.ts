import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardPageRoutingModule,
    IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}