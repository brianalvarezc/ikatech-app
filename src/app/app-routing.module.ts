import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { CategoryComponent } from './components/category/category.component';
import { HerComponent } from './components/category/her/her.component';
import { HimComponent } from './components/category/him/him.component';
import { CustomerServiceComponent } from './components/customer-service/customer-service.component';
import { NewsletterComponent } from './components/footer/newsletter/newsletter.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { StoreDirectoryComponent } from './components/store-directory/store-directory.component';
import { StoresComponent } from './components/stores/stores.component';

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
    component: ProductComponent,
    children: [
      {
        path: '**',
        component: ProductComponent
      },
      {
        path: 'bla',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: "him",
    component: CategoryComponent
  },
  {
    path: "her",
    component: HerComponent
  },
  {
    path: "blog",
    component: BlogComponent
  },
  {
    path: "history",
    component: HistoryComponent
  },
  {
    path: "stores",
    component: StoresComponent
  },
  {
    path: "cart",
    component: ShopCartComponent
  },
  {
    path: "my-account",
    component: MyAccountComponent
  },
  {
    path: "customer-service",
    component: CustomerServiceComponent
  },
  {
    path: "store-directory",
    component: StoreDirectoryComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "newsletter",
    component: NewsletterComponent
  },
  {
    path: '**',
    component: ProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
