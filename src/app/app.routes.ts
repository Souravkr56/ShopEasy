import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [

 {path:'home', component:HomeComponent},
 {path:'products', component:ProductComponent},
 {path:'categories',component:CategorieComponent},
 {path:'login', component:UserloginComponent},
 {path:'carts',component:CartComponent},

  

    
];
