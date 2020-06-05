import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-physicaltraining',
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
      <a class="navbar-item" routerLink="/home/playgroup">Create Playgroup</a>
     
    </div>
  </div>
</nav>

  <section class="hero is-primary is-bold">
  <div class="hero-body">
  <div class="container">  
    <h1 class="title"><i class="fa fa-university" aria-hidden="true"></i>Physical Activity Class</h1>  
  </div>
  </div>
  </section>

  <section class="section">
  <div class="container">
 


  

  <div >
  <video width="1000" controls>
  <source src="/assets/video/workout_dance.mp4" type="video/mp4">
 
  Your browser does not support HTML video.
</video> 
  <div>
  <button type="submit" class="button is-medium" style="background-color:#6a6a6a;color:white"><i class="fa fa-video-camera" aria-hidden="true"></i>   Record</button>
  <button type="submit" class="button  is-medium" style="background-color:#6a6a6a;color:white"> <i class="fa fa-hand-paper-o" aria-hidden="true"></i> Raise Hand</button>
  <button type="submit" class="button is-medium" style="background-color:#6a6a6a;color:white"> <i class="fa fa-commenting-o" aria-hidden="true"></i> Chat</button>
  <button type="submit" class="button is-medium" style="background-color:#6a6a6a;color:white"  routerLink="/class-mode"> Class mode</button>
  <button type="submit" class="button is-medium" style="background-color:#6a6a6a;color:white"  routerLink="/class-mode">  Control</button>
  <button type="submit" class="button is-danger is-medium" > <i class="fa fa-sign-out" aria-hidden="true"></i> Leave Class</button>
 </div>

  </div>

   
  </div>
  </section>
  `,
  styles: 
    ['./physicaltraining.component.css']
  
})
export class PhysicaltrainingComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  constructor() { }

  ngOnInit() {
  }
  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo);
  }
}
