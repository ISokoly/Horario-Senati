import { Routes } from '@angular/router';
import { DahboardComponent } from './pages/dahboard/dahboard.component';
import { SenalesComponent } from './pages/senales/senales.component';

export const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'dahsboard'
  },
  {
    path:'dashboard',
    component:DahboardComponent
    
  },
  {
    path:'senales',
    component:SenalesComponent
    
  }
];
