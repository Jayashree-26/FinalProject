import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { HomeComponent } from './Home/Home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './Header/Header.component';
import { GoldComponent } from './gold/gold.component';
import { SilverComponent } from './silver/silver.component';
import { DiamondComponent } from './diamond/diamond.component';


@NgModule({
  declarations: [			
    AppComponent,
      LoginComponent,
      HomeComponent,
      FooterComponent,
      ProfileComponent,
      HeaderComponent,
      RegisterComponent,
      GoldComponent,
      SilverComponent,
      DiamondComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
