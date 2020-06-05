import { Component, OnInit } from '@angular/core';
import { ClassComponent } from "../class/class.component";


@Component({
  selector: 'app-class-mode',
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
      <h1 class="title"><i class="fa fa-laptop" aria-hidden="true"></i> Class Mode and Control</h1>  
    </div>
    </div>
    </section>

    <section class="section">
    <div class="container">
    <form action="/action_page.php">
    <h5> My class mode</h5>
  <input type="radio" id="viewClass" name="viewClass"  checked value="viewClass">
  <label for="viewClass">ViewClass</label><br>
  <input type="radio" id="eNote" name="eNote" value="eNote">
  <label for="eNote">E-Note Sharing</label><br>
  <input type="radio" id="screenshare" name="screenshare" value="screenshare">
  <label for="screenshare">Screen Share</label>
  <br>  

  <h5> control </h5>
  <input type="checkbox" id="student" name="Student" value="student">
  <label for="student"> Student</label><br>
  <input type="checkbox" id="organizier" name="Organizier" value="organizier">
  <label for="vehicle2"> organizier</label><br>
</form>
    </div>
    </section>
  `,
  styleUrls: ['./class-mode.component.css']
})
export class ClassModeComponent implements OnInit {


  constructor() { }

  ngOnInit() { }
  showMyContainer: boolean = false;
  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  test() {
    this.showMyContainer = true;
    console.log("hjashjahd");
  }

}
