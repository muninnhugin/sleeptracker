import { Component, OnInit } from '@angular/core';
import {StanfordSleepinessData} from "../data/stanford-sleepiness-data";
import {RangeCustomEvent} from "@ionic/angular";

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.page.html',
  styleUrls: ['./sleepiness.page.scss'],
})
export class SleepinessPage implements OnInit {
  range:HTMLElement | null;
  constructor() {
    this.range = document.getElementById('sleepiness-range');
  }

  ngOnInit() {
  }

  describeSleepiness(event:Event) {
    let description = document.getElementById('sleepiness-description');
    if(description == null) return;
    let sleepinessRating = (event as RangeCustomEvent).detail.value;
    if(typeof sleepinessRating == "number")
      description.innerText = <string>StanfordSleepinessData.ScaleValues[sleepinessRating];
  }
}

