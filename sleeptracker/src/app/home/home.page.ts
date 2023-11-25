import {Component, inject, OnInit} from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
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

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}

  logSleep() {
    this.sleepTime = new SleepData();
    this.toggleButtons();
  }

  logWake() {
    this.wakeTime = new SleepData();
    this.toggleButtons();
    if(this.sleepTime != null && this.wakeTime != null)
      this.pushOvernightSleepData(new OvernightSleepData(this.sleepTime.loggedAt, this.wakeTime.loggedAt))
  }

  pushOvernightSleepData(overnightSleepData:OvernightSleepData) {
      this.sleepService.logOvernightData(overnightSleepData);
      console.log(overnightSleepData);
  }

  toggleButtons() {
    if(this.wakeBtn == null || this.sleepBtn == null) return;
    if(this.wakeBtn.style.display == '')  this.wakeBtn.style.display = 'none';
    else this.wakeBtn.style.display = '';
    if(this.sleepBtn.style.display == '') this.sleepBtn.style.display = 'none'
    else this.sleepBtn.style.display = '';
  }
}
