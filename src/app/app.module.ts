import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaisSobreComponent } from './mais-sobre/mais-sobre.component';
import { MoedasComponent } from './moedas/moedas.component';

@NgModule({
  declarations: [
    AppComponent,
    MaisSobreComponent,
    MoedasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
