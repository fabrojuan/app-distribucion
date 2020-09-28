import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routing  } from './app.routes';

// Services
import { TransportesService } from './services/transportes/transportes.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TransporteComponent } from './transporte/transporte.component';
import { TransportesComponent } from './transportes/transportes.component';
import { ProductosComponent } from './productos/productos.component';
import { CargasComponent } from './cargas/cargas.component';
import { CargaComponent } from './carga/carga.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TransporteComponent,
    TransportesComponent,
    ProductosComponent,
    CargasComponent,
    CargaComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [ TransportesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
