import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-note',
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
      <a class="navbar-item" routerLink="/home/contact" >Create a Class</a>
      <a class="navbar-item" routerLink="/home/classroom" >Create Class Room</a>
      <a class="navbar-item" routerLink="/home/studysession" >Create Study Session</a>
      <a class="navbar-item" routerLink="/home/playgroup" >Create Playgroup</a>
     
    </div>
  </div>
</nav>

  <section class="hero is-primary is-bold">
    <div class="hero-body">
    <div class="container">  
      <h1 class="title"><i class="fa fa-book" aria-hidden="true"></i> e-Note</h1>  
    </div>
    </div>
    </section>
  <section >
  <div class="hero-body">
  <div class="container" style="
  margin-left: 200px">
  <img src="assets/img/eNote.png">
    
  </div>
  </div>
  </section>
  `,
  styles: []
})
export class ENoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
