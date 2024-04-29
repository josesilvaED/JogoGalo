import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuadradoComponent } from './quadrado/quadrado.component';
import { TabuleiroComponent } from './tabuleiro/tabuleiro.component';

@NgModule({
  declarations: [
    AppComponent,
    QuadradoComponent,
    TabuleiroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
