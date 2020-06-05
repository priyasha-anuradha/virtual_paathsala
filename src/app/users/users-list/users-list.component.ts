import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-users-list',
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
    <h1 class="title"><i class="fa fa-calendar" aria-hidden="true"></i> Schedule</h1>  
      
  </div>
  
  </div>
  </section>
    <section class="section">
    <div class="container">
    <div class="columns is-multiline">

      <!-- loop over our users and give them each a card -->
      <!--     <div class="column is-4" *ngFor="let user of users | async">
        <div class="card">
          <div class="card-content">
            <a routerLink="/users/{{ user.login }}">{{ user.login }}</a>
          </div>      
        </div>      
      </div>-->

      <button  type="button" class="collapsible"><i class="fa fa-calendar-plus-o" aria-hidden="true"></i> Upcoming Classes+</button>
      <div class="content">
      <ul>
      <li>English (10 July 2020 10:00)</li>
      <li>Biology (10 July 2020 11:00)</li>
     
    </ul> 
      </div>

      <button style='margin-top: 20px' type="button" class="collapsible"><i class="fa fa-graduation-cap" aria-hidden="true"></i> Upcoming Tests+</button>
      <div class="content">
      <ul>
      <li>Maths (12 July 2020)</li>
      <li>English (15 July 2020)</li>
      <li>Physics (20 July 2020)</li>
    </ul> 
    
      </div>

      <button  style='margin-top: 20px' type="button" class="collapsible"><i class="fa fa-bell-o" aria-hidden="true"></i> Activities+</button>
      <div class="content">
        <p>NA</p>
      </div>

    </div>
    </div>

    
    </section>
  `,
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

  }
}
