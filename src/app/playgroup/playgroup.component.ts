import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playgroup',
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
    <h1 class="title"><i class="fa fa-university" aria-hidden="true"></i>  Playgroup</h1>  
  </div>
  </div>
  </section>
  <section class="section">
  <div class="container">

    <!-- form goes here -->
    <form (ngSubmit)="processForm()">
    <h5> Create Playgroup</h5>
        <!-- name -->
        <div class="field">          
        <input 
          type="text" 
          name="teamName" 
          class="input" 
          placeholder=" teamName" 
          [(ngModel)]="teamName"
          required
          email
          #teamnameInput="ngModel">

        <div class="help is-error" *ngIf="teamnameInput.invalid && teamnameInput.dirty">
          *Mandatory Field
        </div>
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
export class PlaygroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
