import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerComponent } from './components/category/her/her.component';
import { HimComponent } from './components/category/him/him.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "product",
    component: ProductComponent
  },
  {
    path: "category/him",
    component: HimComponent
  },
  {
    path: "category/her",
    component: HerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
