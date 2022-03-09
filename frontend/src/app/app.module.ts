import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './component/template/header/header.component';

// para usar na minha header
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './component/template/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule  // qualquer module que usa outro import
  ],
  providers: [],
  bootstrap: [AppComponent] // apponta para o meu app.component
})
export class AppModule { }
