import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  sleepiness():void {
    this.router.navigate(['/sleepiness']);
  }

  home():void {
    this.router.navigate(['/home']);
  }

  log():void {
    this.router.navigate(['/log']);
  }

  settings():void {
    this.router.navigate(['/settings']);
  }

}
