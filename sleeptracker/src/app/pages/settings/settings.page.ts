import { Component, OnInit } from '@angular/core';
import {LocalNotifications} from "@capacitor/local-notifications";
import {Time} from "@angular/common";

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
    let time = await this.getScheduledTime();
    console.log(time);
    if (time == undefined) return;
    await LocalNotifications.requestPermissions();
    await LocalNotifications.schedule({
      notifications: [{
        title: 'Sleep Tracker',
        body: 'Time to log your sleep in Sleep Tracker.',
        id: 1,
        schedule: {
          on: {
            hour: time.getHours(),
            minute: time.getMinutes(),
          }
        }
      }]
    });

    console.log('Notification scheduled.');
  }

  async getScheduledTime() {
    let confirm = await (document.getElementById('notification_time') as HTMLIonDatetimeElement).confirm(true)
    let scheduled = (document.getElementById('notification_time') as HTMLIonDatetimeElement).value;
    if (typeof scheduled != "string") return;
    return new Date(scheduled);
  }
}
