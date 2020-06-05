import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studysession',
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
  <h1 class="title"><i class="fa fa-university" aria-hidden="true"></i> Class Study Session</h1>  
</div>
</div>
</section>

<section class="section">
<div class="container">

<i class="fa fa-camera"  style='font-size:30px' aria-hidden="true"></i>
<label class="switch">
<input type="checkbox" checked>
<span class="slider round"></span>
</label> 
<i class='fa fa-microphone-slash' aria-hidden="true" style='font-size:30px' ></i>
<p>

<a href="https://www.bigbuckbunny.org/" target="_blank"></a>.
</p>


<div >
<video width="1000" controls>
<source src="mov_bbb.mp4" type="video/mp4">
<source src="mov_bbb.ogg" type="video/ogg">
Your browser does not support HTML video.
</video>
<div>

<button type="submit" class="button is-medium" style="background-color:#6a6a6a;color:white"><i class="fa fa-video-camera" aria-hidden="true"></i>   Record</button>
<button type="submit" class="button is-medium" style="background-color:#6a6a6a;color:white"> <i class="fa fa-commenting-o" aria-hidden="true"></i> Chat</button>
<button type="submit" class="button is-medium" style="background-color:#6a6a6a;color:white"  routerLink="/home/e-notebook" ><i class="fa fa-book" aria-hidden="true"></i> eNote</button>
<button type="submit" class="button is-danger is-medium" > <i class="fa fa-sign-out" aria-hidden="true"></i> Leave Class</button>
</div>
</div>

</div>
</section>

  `,
  styles: []
})
export class StudysessionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
