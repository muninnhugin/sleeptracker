import { Component, OnInit } from '@angular/core';
import {LocalNotifications} from "@capacitor/local-notifications";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async scheduleNotification() {
    await LocalNotifications.requestPermissions();
    await LocalNotifications.schedule({
      notifications: [{
        title: 'Sleep Tracker',
        body: 'Time to log your sleep in Sleep Tracker.',
        id: 1,
        schedule: { at: new Date(Date.now() + 1000 * 5) } // Schedule notification after 5 seconds
      }]
    });

    console.log('Notification scheduled!');
  }
}
