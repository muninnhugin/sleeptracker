import {Component, inject, OnInit} from '@angular/core';
import { SleepService } from '../../services/sleep.service';
import { SleepData } from '../../data/sleep-data';
import { OvernightSleepData } from '../../data/overnight-sleep-data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  toastDuration = 5000;
  sleepTime:SleepData | null;
  wakeTime:SleepData | null;
  sleepBtn:HTMLElement | null;
  wakeBtn:HTMLElement | null;
  sleepService:SleepService

  constructor() {
    this.sleepTime = null;
    this.wakeTime = null;
    this.sleepBtn = null;
    this.wakeBtn = null;
    this.sleepService = inject(SleepService);
	}

	ngOnInit() {
    this.sleepBtn = document.getElementById('sleep_btn');
    this.wakeBtn = document.getElementById('wake_btn');
    if(this.wakeBtn != null) this.wakeBtn.style.display = 'none';
	}

  logSleep() {
    this.sleepTime = new SleepData();
    this.toggleButtons();
  }

  logWake() {
    this.wakeTime = new SleepData();
    this.toggleButtons();
    this.pushOvernightSleepData();
  }

  pushOvernightSleepData() {
    setTimeout(() => {
      if(this.sleepTime != null && this.wakeTime != null) {
        this.sleepService.logOvernightData(new OvernightSleepData(this.sleepTime.loggedAt, this.wakeTime.loggedAt));
        console.log('Sleep data pushed.')
      }
      else
        console.log('Sleep data null, not pushed.')
    }, this.toastDuration)
  }

  toggleButtons() {
    if(this.wakeBtn == null || this.sleepBtn == null) return;
    if(this.wakeBtn.style.display == '')  this.wakeBtn.style.display = 'none';
    else this.wakeBtn.style.display = '';
    if(this.sleepBtn.style.display == '') this.sleepBtn.style.display = 'none'
    else this.sleepBtn.style.display = '';
  }

  undoSleep = () => {
    this.sleepTime = null;
    this.toggleButtons();
  }

  undoWake = () => {
    this.wakeTime = null;
    this.toggleButtons();
  }

  dismissBtn = {
    icon: 'close',
    role: 'cancel',
    side: 'start'
  }
  undoSleepBtn = {
    text: 'Undo',
    side: 'end',
    handler: this.undoSleep
  }
  undoWakeBtn = {
    text: 'Undo',
    side: 'end',
    handler: this.undoWake
  }
}
