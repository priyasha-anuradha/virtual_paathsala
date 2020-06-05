import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component'
import { ContactComponent } from './contact/contact.component';
import { ClassModeComponent } from "./class-mode/class-mode.component";
import { TestFromHomeComponent } from "./test-from-home/test-from-home.component";
import { ELibraryComponent } from "./e-library/e-library.component";
import { ELibraryMathsComponent } from "./e-library-maths/e-library-maths.component";
import { ClassComponent } from './class/class.component';
import { ENoteComponent } from './e-note/e-note.component';
import { CreateclassroomComponent } from './createclassroom/createclassroom.component';
import { PhysicaltrainingComponent } from './physicaltraining/physicaltraining.component';
import { StudysessionComponent } from './studysession/studysession.component';
import { PlaygroupComponent } from './playgroup/playgroup.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/classroom',
    component: CreateclassroomComponent
  },
  {
    path: 'home/contact',
    component: ContactComponent
  },

  {
    path: 'home/users',
    loadChildren: 'app/users/users.module#UsersModule'
  },
  {
    path: 'class-mode',
    component: ClassModeComponent
  },
  {
    path: 'home/physicaltraining',
    component: PhysicaltrainingComponent
  },
  {
    path: 'home/e-notebook',
    component: ENoteComponent
  },

  {
    path: 'home/test-from-home',
    component: TestFromHomeComponent
  },
  {
    path: 'home/e-library',
    component: ELibraryComponent
  },
  {
    path: 'home/e-library-maths',
    component: ELibraryMathsComponent
  },
  {
    path: 'home/studysession',
    component: StudysessionComponent
  },
  {
    path: 'home/playgroup',
    component: PlaygroupComponent
  },
  {
    path: 'class',
    component: ClassComponent
  }

];StudysessionComponent

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
