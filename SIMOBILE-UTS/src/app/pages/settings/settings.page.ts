import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false,
})
export class SettingsPage implements OnInit {

  isDarkMode: boolean = false;

  constructor() { }

  ngOnInit() {
    this.isDarkMode = document.body.classList.contains('dark');
  }

  toggleDarkMode(event: any) {
    const isChecked = event.detail.checked;
    document.body.classList.toggle('dark', isChecked);
  }
}
