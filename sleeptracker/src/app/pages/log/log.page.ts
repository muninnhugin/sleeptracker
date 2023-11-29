import { Component, OnInit } from '@angular/core';
import { SleepService } from 'src/app/services/sleep.service';
import { OvernightSleepData } from 'src/app/data/overnight-sleep-data';
import { StanfordSleepinessData } from 'src/app/data/stanford-sleepiness-data';

@Component({
  selector: 'app-log',
  templateUrl: './log.page.html',
  styleUrls: ['./log.page.scss'],
})
export class LogPage implements OnInit {
  type = 'sleep_time';
  sleepinessData:StanfordSleepinessData[] = [];
  overnightData:OvernightSleepData[] = [];

  constructor(private sleepService:SleepService) {}

  ngOnInit() {
    this.sleepinessData = this.sleepService.allSleepinessData;
    this.overnightData = this.sleepService.allOvernightData;
    console.log(this.sleepinessData);
    console.log(this.overnightData);
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
