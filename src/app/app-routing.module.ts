import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiamondComponent } from './diamond/diamond.component';
import { GoldComponent } from './gold/gold.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { SilverComponent } from './silver/silver.component';

const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'gold',component:GoldComponent},
  {path:'silver',component:SilverComponent},
  {path:'diamond',component:DiamondComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
