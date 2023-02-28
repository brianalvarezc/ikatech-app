import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { HimComponent } from './components/category/him/him.component';
import { HerComponent } from './components/category/her/her.component';
import { AvisosTopComponent } from './components/header/avisos-top/avisos-top.component';
import { AvisosMiddleComponent } from './components/header/avisos-middle/avisos-middle.component';
import { MenuServicioClienteComponent } from './components/header/menu-servicio-cliente/menu-servicio-cliente.component';
import { BuscadorComponent } from './components/header/buscador/buscador.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { MenuTiendaComponent } from './components/header/menu-tienda/menu-tienda.component';
import { CarritoComponent } from './components/header/carrito/carrito.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { StoreDirectoryComponent } from './components/store-directory/store-directory.component';
import { CustomerServiceComponent } from './components/customer-service/customer-service.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { BlogComponent } from './components/blog/blog.component';
import { HistoryComponent } from './components/history/history.component';
import { StoresComponent } from './components/stores/stores.component';
import { SearchComponent } from './components/search/search.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { NewsletterComponent } from './components/footer/newsletter/newsletter.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    ProductComponent,
    HimComponent,
    HerComponent,
    AvisosTopComponent,
    AvisosMiddleComponent,
    MenuServicioClienteComponent,
    BuscadorComponent,
    LogoComponent,
    MenuTiendaComponent,
    CarritoComponent,
    ShopCartComponent,
    StoreDirectoryComponent,
    CustomerServiceComponent,
    MyAccountComponent,
    BlogComponent,
    HistoryComponent,
    StoresComponent,
    SearchComponent,
    CarouselComponent,
    NewsletterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
