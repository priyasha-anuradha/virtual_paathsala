import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ClassModeComponent } from "./class-mode/class-mode.component";
import { TestFromHomeComponent } from "./test-from-home/test-from-home.component";
import { ELibraryComponent } from "./e-library/e-library.component";
import { ELibraryMathsComponent } from "./e-library-maths/e-library-maths.component";
import { ClassComponent} from "./class/class.component";
import { LoginComponent } from './login/login/login.component';
import { ENoteComponent } from './e-note/e-note.component';
import { CreateclassroomComponent } from './createclassroom/createclassroom.component';
import { PhysicaltrainingComponent } from './physicaltraining/physicaltraining.component';
import { StudysessionComponent } from './studysession/studysession.component';
import { PlaygroupComponent } from './playgroup/playgroup.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ClassModeComponent,
    TestFromHomeComponent,
    ELibraryComponent,
    ELibraryMathsComponent,
    ClassComponent,
    LoginComponent,
    ENoteComponent,
    CreateclassroomComponent,
    PhysicaltrainingComponent,
    StudysessionComponent,
    PlaygroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
