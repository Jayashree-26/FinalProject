import { NgModule, enableProdMode } from '@angular/core';
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
import { HeaderComponent } from './Header/Header.component';
import { GoldComponent } from './gold/gold.component';
import { SilverComponent } from './silver/silver.component';
import { DiamondComponent } from './diamond/diamond.component';
import { AddProductsComponent } from './Add-Products/Add-Products.component';
import { ProductsComponent } from './Products/Products.component';
import { UpdateComponent } from './Update/Update.component';
import { AdminComponent } from './Admin/Admin.component';
import { TotalcustomerComponent } from './totalcustomer/totalcustomer.component';
import { goldringComponent } from './goldring/goldring.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { GoldchainComponent } from './goldchain/goldchain.component';
import { GoldearringComponent } from './goldearring/goldearring.component';
import { GoldbraceletComponent } from './goldbracelet/goldbracelet.component';
import { GoldbanglesComponent } from './goldbangles/goldbangles.component';
import { BuynowComponent } from './Buynow/Buynow.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SilverRingComponent } from './silver-ring/silver-ring.component';
import { SilverChainComponent } from './silver-chain/silver-chain.component';
import { SilverEarringComponent } from './silver-earring/silver-earring.component';
import { SilverBanglesComponent } from './silver-bangles/silver-bangles.component';
import { SilverBraceletComponent } from './silver-bracelet/silver-bracelet.component';
import { DiamondRingComponent } from './diamond-ring/diamond-ring.component';
import { DiamondChainComponent } from './diamond-chain/diamond-chain.component';
import { DiamondEarringComponent } from './diamond-earring/diamond-earring.component';
import { DiamondBanglesComponent } from './diamond-bangles/diamond-bangles.component';
import { DiamondBraceletComponent } from './diamond-bracelet/diamond-bracelet.component';
import { SaveSchemeComponent } from './save-scheme/save-scheme.component';
import { KidsComponent } from './kids/kids.component';
import { GiftandcoinsComponent } from './giftandcoins/giftandcoins.component';
import { MensComponent } from './mens/mens.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { MyordersComponent } from './myorders/myorders.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { GoldcoinsComponent } from './goldcoins/goldcoins.component';
import { SilvercoinsComponent } from './silvercoins/silvercoins.component';

@NgModule({
  declarations: [		
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    GoldComponent,
    SilverComponent,
    DiamondComponent,
    AddProductsComponent,
    ProductsComponent,
    UpdateComponent,
    AdminComponent,
    TotalcustomerComponent,
    AddtocartComponent,
    goldringComponent,
    GoldchainComponent,
    GoldearringComponent,
    GoldbraceletComponent,
    GoldbanglesComponent,
    BuynowComponent,
    CheckoutComponent,
    SilverRingComponent,
    SilverChainComponent,
    SilverEarringComponent,
    SilverBanglesComponent,
    SilverBraceletComponent,
    DiamondRingComponent,
    DiamondChainComponent,
    DiamondEarringComponent,
    DiamondBanglesComponent,
    DiamondBraceletComponent,
    SaveSchemeComponent,
    KidsComponent,
    GiftandcoinsComponent,
    MensComponent,
    ForgotpasswordComponent,
    AboutusComponent,
    ProductdetailsComponent,
    MyordersComponent,
    OrderlistComponent,
      GoldcoinsComponent,
      SilvercoinsComponent
   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
