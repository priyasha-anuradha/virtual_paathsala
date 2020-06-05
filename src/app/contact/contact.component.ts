import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
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
      <h1 class="title"><i class="fa fa-university" aria-hidden="true"></i> Create Class</h1>  
    </div>
    </div>
    </section>

    <section class="section">
    <div class="container">

      <!-- form goes here -->
      <form (ngSubmit)="processForm()">
        <!-- message -->
        <h5> Create Class  </h5>
        <div class="field">
        <select class="input"  >
        <option disabled="disabled"  value="">Subject</option>
        <option *ngFor="let subject of subjects" [value]="subject">{{subject}}</option>
     </select>
      </div>

        <div class="field">
        <select class="input"  >
        <option disabled="disabled" value="">Class  Name</option>
        <option *ngFor="let className of classNames" [value]="className">{{className}}</option>
        </select >
      </div>

        <div class="field">
          <textarea 
            class="textarea" 
            name="message" 
            placeholder="Brief description" 
            [(ngModel)]="message"
            required
            #messageInput="ngModel"></textarea>

            <div class="help is-error" *ngIf="emailInput.invalid && emailInput.dirty">
              Description is required!
            </div>
        </div>

        <!-- email -->
        <div class="field">          
          <input 
            type="text" 
            name="studentID" 
            class="input" 
            placeholder=" Date  Time and Duration" 
            [(ngModel)]="studentID"
            required
            email
            #emailInput="ngModel">
  
          <div class="help is-error" *ngIf="emailInput.invalid && emailInput.dirty">
            *Mandatory Field
          </div>
        </div>
        <button type="submit" class="button is-danger is-small">Create</button>
        <button type="submit" class="button is-success is-small">Send Invite</button>
        <input type="checkbox" id="scan" name="scan" value=" ">
        <label  style="font-size:14px; font-weight:bold"  for="scan"> Scan Me</label><br>
      </form>

    </div>
    </section>
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  subjects: any;
  classNames: any;
  message: string;

  constructor() { }

  ngOnInit() {
    this.subjects = this.getSubject();
    this.classNames = this.getClassName();
  }


  getSubject() {
    return [
      'English', 'Maths', 'Science', 'Social Science'
    ]
  }
  getClassName() {
    return [
      '10thA', '10thB', '9thA', '9thB'
    ]
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
