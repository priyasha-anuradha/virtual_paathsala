import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-header></app-header>
  <div class = "router">
    <section>
    <a   style="font-size:20px; font-weight:bold; position:relative; margin:10px 20px 20px 20px!Important;" class="navbar-item" routerLink="/class">Enter Class</a>
    <a  style="font-size:20px; font-weight:bold; position:relative; margin:10px 20px 20px 20px!Important;"class="navbar-item" routerLink="physicaltraining">Enter Physical Training</a>
    <a  style="font-size:20px; font-weight:bold; position:relative; margin:10px 20px 20px 20px!Important;"class="navbar-item" routerLink="e-library">E-Library</a>
    <a style="font-size:20px; font-weight:bold; position:relative; margin:10px 20px 20px 20px!Important;" class="navbar-item" routerLink="e-notebook">My e-NoteBook</a>
    <a style="font-size:20px; font-weight:bold; position:relative; margin:10px 20px 20px 20px!Important;"class="navbar-item" routerLink="users">My Schedule</a>
    <a style="font-size:20px; font-weight:bold; position:relative; margin:10px 20px 20px 20px!Important;" class="navbar-item" routerLink="test-from-home">Enter Test</a>
    <a style="font-size:20px; font-weight:bold; position:relative; margin:10px 20px 20px 20px!Important;" class="navbar-item" routerLink="attendence">My Attendence</a>
    <a style="font-size:20px; font-weight:bold; position:relative; margin:10px 20px 20px 20px!Important;"class="navbar-item" routerLink="notification">Notifications</a>
    </section>
    <div>
  `,
  styles: [`
  .router{
    background-color: lightblue;
  }`]
})

export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {


  }
}
