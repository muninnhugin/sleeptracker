import {Component, inject, OnInit} from '@angular/core';
import {StanfordSleepinessData} from "../data/stanford-sleepiness-data";
import {RangeCustomEvent} from "@ionic/angular";
import {SleepService} from "../services/sleep.service";
import {SleepData} from "../data/sleep-data";

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.page.html',
  styleUrls: ['./sleepiness.page.scss'],
})
export class SleepinessPage implements OnInit {
  sleepinessRating: number | null;
  sleepService = inject(SleepService)
  description: HTMLElement | null;

  constructor() {
    this.sleepinessRating = null;
    this.description = null;
  }

  ngOnInit() {
    let submitBtn = document.getElementById('submitBtn');
    if(submitBtn != null) submitBtn.addEventListener('click', this.logSleepiness)
  }

  describeSleepiness = (event:Event) => {
    this.description = document.getElementById('sleepiness-description');
    if(this.description == null) return;
    let sleepinessRating = (event as RangeCustomEvent).detail.value;
    if(typeof sleepinessRating == "number")
      this.description.innerText = <string>StanfordSleepinessData.ScaleValues[sleepinessRating];
  }

  getSleepiness = (event:Event) => {
    let sleepiness = (event as RangeCustomEvent).detail.value;
    if(typeof sleepiness == "number")
      this.sleepinessRating = sleepiness;
  }

  logSleepiness = () => {
    if(this.sleepinessRating != null) {
      this.sleepService.logSleepinessData(new StanfordSleepinessData(this.sleepinessRating));
      if(this.description != null) this.description.innerText = '';
    }
    else console.error('Data null, sleepiness not logged.')
  }
}

