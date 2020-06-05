import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-e-library-maths',
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
    <h1 class="title"><i class="fa fa-book" aria-hidden="true"></i> E-Library: Maths</h1>  
      
  </div>
  
  </div>
  </section>
  <section class="section">
  <div class="container">
  <div class="columns is-multiline">

   

    <button  type="button" class="collapsible"><i class="fa fa-book" aria-hidden="true"></i> Class 10 Syllabus</button>
    <div class="content">
    <ul>
    <li><a href="" target="_self">NUMBER SYSTEMS </a></li>
    <li>ALGEBRA </li>
    <li>COORDINATE GEOMETRY </li>
    <li>Lecture Notes <i class="fa fa-download" aria-hidden="true"></i></li>
   
  </ul> 
    </div>

    <button style='margin-top: 20px' type="button" class="collapsible"><i class="fa fa-book" aria-hidden="true"></i> Class 9 Syllabus</button>
    <div class="content">
    <ul>
    <li>NUMBER SYSTEMS </li>
    <li>STATISTICS & PROBABILITY </li>
    <li>GEOMETRY </li>
    <li>Lecture Notes <i class="fa fa-download" aria-hidden="true"></i></li>
 
  </ul> 
  
    </div>

    <button  style='margin-top: 20px' type="button" class="collapsible"><i class="fa fa-paperclip" aria-hidden="true"></i> Assignments</button>
    <div class="content">
      <p>Assigment PDF</p>
    </div>

  </div>
  </div>

  
  </section>
  `,
  styleUrls: ['./e-library-maths.component.css']
})
export class ELibraryMathsComponent implements OnInit {
 
 
  constructor() {}

 
  ngOnInit() {
   
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
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
