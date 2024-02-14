import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiamondComponent } from './diamond/diamond.component';
import { GoldComponent } from './gold/gold.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { SilverComponent } from './silver/silver.component';
import { AdminComponent } from './Admin/Admin.component';
import { AddProductsComponent } from './Add-Products/Add-Products.component';
import { ProductsComponent } from './Products/Products.component';
import { UpdateComponent } from './Update/Update.component';
import { TotalcustomerComponent } from './totalcustomer/totalcustomer.component';
import { goldringComponent } from './goldring/goldring.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { GoldchainComponent } from './goldchain/goldchain.component';
import { GoldbanglesComponent } from './goldbangles/goldbangles.component';
import { GoldbraceletComponent } from './goldbracelet/goldbracelet.component';
import { GoldearringComponent } from './goldearring/goldearring.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'gold', component: GoldComponent },
  { path: 'silver', component: SilverComponent },
  { path: 'diamond', component: DiamondComponent },
  { path: 'goldchain', component: GoldchainComponent },
  { path: 'admindashboard', component: AdminComponent },
  { path: 'add', component: AddProductsComponent },
  { path: 'addProducts', component: ProductsComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'totalcustomer', component: TotalcustomerComponent },
  { path: 'goldring', component: goldringComponent },
  { path: 'goldearring', component: GoldearringComponent },
  { path: 'goldbracelet', component: GoldbraceletComponent },
  { path: 'goldbangles', component: GoldbanglesComponent },
  { path: 'addtocart', component: AddtocartComponent },
  { path: 'buy', component: BuynowComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'silverring', component: SilverRingComponent },
  { path: 'silverchain', component: SilverChainComponent },
  { path: 'silverearring', component: SilverEarringComponent },
  { path: 'silverbangles', component: SilverBanglesComponent },
  { path: 'silverbracelet', component: SilverBraceletComponent },
  { path: 'diamondring', component: DiamondRingComponent },
  { path: 'diamondchain', component: DiamondChainComponent },
  { path: 'diamondearring', component: DiamondEarringComponent },
  { path: 'diamondbangles', component: DiamondBanglesComponent },
  { path: 'diamondbracelet', component: DiamondBraceletComponent },
  { path: 'savescheme', component: SaveSchemeComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'giftandcoins', component: GiftandcoinsComponent },
  { path: 'mens', component: MensComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'myorders', component: MyordersComponent },
  { path: 'orderlist', component: OrderlistComponent },
  { path: 'goldcoins', component: GoldcoinsComponent },
  { path: 'silvercoins', component: SilvercoinsComponent },
  { path: 'productdetails/:id', component: ProductdetailsComponent }, // Using ':id' to pass the image information
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
