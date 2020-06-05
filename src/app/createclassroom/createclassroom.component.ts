import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createclassroom',
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
      <a class="navbar-item" routerLink="classroom" >Create Class Room</a>
      <a class="navbar-item" routerLink="/home/studysession" >Create Study Session</a>
      <a class="navbar-item" routerLink="/home/playgroup" >Create Playgroup</a>
     
    </div>
  </div>
</nav>

  <section class="hero is-primary is-bold">
  <div class="hero-body">
  <div class="container">  
    <h1 class="title"><i class="fa fa-university" aria-hidden="true"></i> Create Room</h1>  
  </div>
  </div>
  </section>
  <section class="section">
  <div class="container">

    <!-- form goes here -->
    <form (ngSubmit)="processForm()">
    <h5> Create Class Room </h5>
        <!-- name -->
        <div class="field">
            <select class="input" >
            <option disabled="disabled" value="">Class Room Name</option>
            <option value="10th A">10th A</option>
            <option value="10th B">10th B</option>
            <option value="9thA"> 9th A</option>
            <option value=9th B>9th B</option>
         </select>
        </div>

        <!-- email -->
        <div class="field">          
          <input 
            type="text" 
            name="studentID" 
            class="input" 
            placeholder="Student ID's" 
            [(ngModel)]="studentID"
            required
            email
            #emailInput="ngModel">

          <div class="help is-error" *ngIf="emailInput.invalid && emailInput.dirty">
            *Mandatory Field
          </div>
        </div>
        <button type="submit" style = "margin-left: 450px" class="btn btn-primary is-large">Save</button>
    </form>
    </div>
    </section>
  `,
  styles: []
})
export class CreateclassroomComponent implements OnInit {
  classNames: any;
  constructor() { }

  ngOnInit() {
    this.classNames = this.getClassName();
  }
  getClassName() {
    return [
      '10thA', '10thB', '9thA', '9thB'
    ]
  }
}
