import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from './products/product.service';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ProductListComponent } from './products/product-list.component';
import { DataObservableComponent } from './data-observable/data-observable.component';
import { DataObservableService } from './data-observable/data-observable.service';
import { ReversePipe } from './reverse.pipe';
import { EventComponent } from './event/event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { Events } from './models/list.model';

const routes:Routes = [
  { path:'', component:HomeComponent },
  { path:'products', component:ProductsComponent },
  { path:'observable', component:DataObservableComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    ProductListComponent,
    DataObservableComponent,
    ReversePipe,
    EventComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService, DataObservableService, Events],
  bootstrap: [AppComponent]
})
export class AppModule { }
