import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test-from-home',
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
      <h1 class="title"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Test From Home</h1>  
        
    </div>
    
    </div>
    </section>

    <section class="section">
    <div class="container">
    <div class="alert alert-warning">
    <strong><i class="fa fa-info-circle" aria-hidden="true"></i> Guidelines for Test</strong> 
    <ul>
    <li>* Test Duration 60 mins</li>
    <li>* Enabling Camera access mandatory</li>
    <li>* Enabling Microphone access mandatory</li>
  </ul>   
    </div>
    <button type="submit" class="button is-success is-large">Start Test</button>
 
    <div style='margin-top:20px' class="alert alert-info">
    <strong><i class="fa fa-video-camera" aria-hidden="true"></i></strong> Needs camera permission.
    <label class="switch">
    <input type="checkbox" checked>
    <span class="slider round"></span>
  </label> 
    </div>

    </div>
   
   <!-- <span>Launch Camera <i class="fa fa-video-camera" aria-hidden="true"></i></span>
    <label class="switch">
    <input type="checkbox" checked>
    <span class="slider round"></span>
  </label> -->
    </section>
  `,
  styleUrls: ['./test-from-home.component.css']
})
export class TestFromHomeComponent implements OnInit {
 

  constructor() {}

  ngOnInit() {}
  showMyContainer: boolean = false;
  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  test(){
    this.showMyContainer=true;
    
  }

}
