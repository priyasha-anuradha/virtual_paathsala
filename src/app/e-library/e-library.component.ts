import { Component, OnInit } from '@angular/core';
import { ELibraryMathsComponent } from "../e-library-maths/e-library-maths.component";


@Component({
  selector: 'app-e-library',
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
      <a class="navbar-item" routerLink="playgroup" >Create Playgroup</a>
     
    </div>
  </div>
</nav>

  <section class="hero is-primary is-bold">
  <div class="hero-body">
  <div class="container">  
    <h1 class="title"><i class="fa fa-book" aria-hidden="true"></i> E-Library</h1>  
      
  </div>
  
  </div>
  </section>
  <section class="section">
  <div class="container">
  <div class="columns is-multiline">

   

    <button  type="button" class="collapsible"><i class="fa fa-book" aria-hidden="true"></i> Subject Guide</button>
    <div class="content">
    <ul>
    <li><a href="home/e-library-maths">Maths   </a></li>
    <li>English </li>
    <li>Biology </li>
   
  </ul> 
    </div>

    <button style='margin-top: 20px' type="button" class="collapsible"><i class="fa fa-graduation-cap" aria-hidden="true"></i> References</button>
    <div class="content">
    <ul>
   
    <li><a href="">English </a></li>
    <li><a href="">Physics </a></li>
  </ul> 
  
    </div>

    <button  style='margin-top: 20px' type="button" class="collapsible"><i class="fa fa-paperclip" aria-hidden="true"></i> Documents & Videos</button>
    <div class="content">
      <p>Literature PDF <i class="fa fa-download" aria-hidden="true"></i></p>
    </div>

  </div>
  </div>

  
  </section>
  `,
  styleUrls: ['./e-library.component.css']
})
export class ELibraryComponent implements OnInit {


  constructor() { }


  ngOnInit() {

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
