import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
  <section class="bgImage">
  <div class="container-fluid">
  <div class="ol-lg-6 col-md-6 col-sm-4 loginLeft">
  <h1 class="title" style="color:white;">Welcome to Virtual Paathshala</h1>
  </div>
  <div class="col-lg-4 col-md-4 col-sm-6" style= "margin-left: 400px">
  <section class="login-page">
  <div class="login-box  ">
      <h3>Sign in</h3>
      <p class="loginP">Please enter your login credentials to proceed.</p>
      <p>&nbsp;</p>
      <form (ngSubmit)="onSubmit()">
          <div class="form-group email">
          <input  type="email" name="email" class="input" placeholder="Username"  [(ngModel)]="email" required #emailInput="ngModel">
          <div class="help is-error" *ngIf="emailInput.invalid && emailInput.dirty">
        Username is required
        </div>
          </div>
          <div class="form-group password">
          <input  type="password" name="password" class="input" placeholder="Password"  [(ngModel)]="password" required #passwordInput="ngModel">
          <div class="help is-error" *ngIf="passwordInput.invalid && passwordInput.dirty">
        Password is required
        </div>
          </div>
          <div class="form-group">
              <button type="submit" class="block"  routerLink="/home">Login</button>
          </div>
      </form>
      <div class="clearfix"></div>
  </div>
</section>
</div>
</div>
</section>
  `,
  styles: [`  
  
  .bgImage{
    background-image: url(../../assets/img/elearning.jpg);
     /* Full height */
     height: 100vh; 
  
     /* Center and scale the image nicely */
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
  }
  .loginLeft{
    padding: 3% 0 0 0;
  }
  .loginPL a {color: #fff; text-decoration: underline; font-family: "Jiotype-light";}
  .loginPL a:hover{ color:#0d49ba; text-decoration:none; font-weight: bold;}
  .loginH1, .loginPL { color: #fff; font-family: "Jiotype-light";}
  
  .login-page {
     background-image: url(../../assets/img/elearning.jpg); 
   /*  background-size: 100% 100%;
    height: 100%;
    position: absolute;
    width: 100%; */
   }
   /* .login-page:after {
     content: "";
     width: 100%;
     height: 200px;
     background: #236aef;
   } */
   
  .login-btn{
    background: #15425f;
      border: none;
      font-weight: 500;
      font-size: 13px;
      padding: 8px 18px;
      transition: 0.3s;
      outline: none!important;
      border-radius: 50px;
      color: #fff!important;
      padding: 12px 50px;
      position: relative;
      bottom: -15px;
      text-transform: uppercase;
  }
  .login-btn:hover{
    background: #15425f;
    transition: 0.2s;
  }
  
   .login-page .login-box {
    background:#fff;
    padding: 10% 40px 40px 40px;
    /* height: 100vh; */
    margin: 30% 0 0 0;
    border-radius: 6px;
    float: none;
    
    padding: 20px 30px; 
    box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.43);
    -moz-box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.43);
    -webkit-box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.43);
  
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3);
    /*border: 1px solid #DDDBDA;
    position: relative;
    z-index: 1;
  
    top: 30%;
    transform: translate(0,-60%)!important;
    width: 430px; */
   }
  
   .logo {
    /* margin-top: -50px; */
    width: 80px;
    height: 80px;
   }
   .login-page .login-box h3 {
    /* text-transform: uppercase; */
    margin: 8px 0 30px 0;
    font-size: 25px;
    color: #045b88;
    /* font-weight: 800; */
   }
   .login-page .login-box .form-group {
    position: relative;
    margin:20px 0;
   }
   .login-page .login-box .form-group .form-control {
    height: 40px;
    border-radius: 4px;
    padding: 0 45px 0 13px;
    font-family: jiotype-light; 
    box-shadow: inset 0 0 6px 20px #fff;
    -moz-box-shadow: inset 0 0 6px 20px #fff;;
    -webkit-box-shadow:inset 0 0 6px 20px #fff;
   }
   
   .login-page .login-box .form-group.email:after{
    font-family: icomoon;
    position: absolute;
     right: 16px;
    top: 28px;
    font-size: 18px;
    color: #727779;
   }
   .login-page .login-box .form-group.password:after{
    font-family: icomoon;
    position: absolute;
    right: 16px;
    top: 30px;
    font-size: 16px;
    color: #727779;
   }
   .loginP{
     margin-top:-22px;
     font-family: "Jiotype-light";
     color: #2b2b2b;
   }
   /* .login-page .login-box .form-group.password .fa{
    position: absolute;
    right: 11px;
    top: 11px;
    font-size: 20px;
    color: #88288f;
    cursor: pointer;
   } */
   .login-page .login-box a.fp {
    color: #000;
    text-transform: uppercase;
    font-size: 14px;
    position: relative;
    top: -10px;
    margin-bottom: 0px;
    display: block;
    cursor: pointer;
   }
   .login-page .login-box a.fp:hover {
    color: #0059ae;
   }
   .login-page .login-box .block {
    padding: 10px;
    width:100%;
    display:block;
    color:white;
    font-size:16px;
    border:none;
    /* position: relative;
    bottom: -15px; */
    text-transform: uppercase;
    background: #045b88;
    border-radius: 4px;
    font-family: 'JioType-medium';
   }
   .login-page .login-box .form-group.otp .form-control {
    float: none;
    width: 60px;
    display: inline-block;
    padding: 0;
    text-align: center;
    font-size: 16px;
    margin: 0 2px;
   }
  
  
  
  .login-page .login-box .form-control:focus {
    border-color: #025b88!important;
    color: #292929!important;
    transition: 0.5s;
  }
  }`]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
