import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular';
import {
  IonApp, IonMenu, IonHeader, IonToolbar, IonTitle,
  IonContent, IonList, IonListHeader, IonLabel,
  IonMenuToggle, IonItem, IonIcon, IonRouterOutlet
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { homeOutline, cubeOutline, cartOutline, personOutline, receiptOutline, settingsOutline, informationCircleOutline } from 'ionicons/icons';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonApp, IonMenu, IonHeader, IonToolbar, IonTitle,
    IonContent, IonList, IonListHeader, IonLabel,
    IonMenuToggle, IonItem, IonIcon, IonRouterOutlet
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    addIcons({ homeOutline, cubeOutline, cartOutline, personOutline, receiptOutline, settingsOutline, informationCircleOutline });
  }
}