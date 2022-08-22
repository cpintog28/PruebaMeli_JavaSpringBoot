import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductConfigComponent } from './product/product-config.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownModule } from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ProductListComponent,
    ProductConfigComponent
  ],
  exports: [ProductConfigComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    DropdownModule,
    ReactiveFormsModule,
    ToastModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent, pathMatch: 'full' }      
    ])
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
