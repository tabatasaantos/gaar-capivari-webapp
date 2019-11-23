import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContatoComponent } from './contato/contato.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ComoAjudarComponent } from './como-ajudar/como-ajudar.component';
import { AOngComponent } from './a-ong/a-ong.component';
import { AdoteComponent } from './adote/adote.component';
import{HttpClientModule} from '@angular/common/http';
import { ScrollSpyDirective } from './scroll-spy-directive';
import { TesteComponent } from './teste/teste.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContatoComponent,
    QuemSomosComponent,
    ComoAjudarComponent,
    AOngComponent,
    AdoteComponent,
    ScrollSpyDirective,
    TesteComponent
  ],
  exports: [
    InicioComponent,
    ContatoComponent,
    QuemSomosComponent,
    ComoAjudarComponent,
    AOngComponent,
    AdoteComponent,
    ScrollSpyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
