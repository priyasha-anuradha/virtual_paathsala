import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-dark">

      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="assets/img/jio_logo.png">
        </a>
      </div>

      <!-- menu -->
      <div class="navbar-menu">
        <div class="navbar-start">
        <a class="navbar-item" routerLink="/home" >Home</a>
        <a class="navbar-item" routerLink="classroom" >Create Class Room</a>
          <a class="navbar-item" routerLink="contact" >Create Class</a>
          <a class="navbar-item" routerLink="studysession" >Create Study Session</a>
          <a class="navbar-item" routerLink="playgroup">Create Playgroup</a>
         
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}
