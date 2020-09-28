import { Routes, RouterModule } from '@angular/router';
import { TransportesComponent } from './transportes/transportes.component';
import { TransporteComponent } from './transporte/transporte.component';
import { ProductosComponent } from './productos/productos.component';
import { CargasComponent } from './cargas/cargas.component';
import { CargaComponent } from './carga/carga.component';

const app_routes: Routes = [
    { path: 'cargas', component: CargasComponent },
    { path: 'carga', component: CargaComponent },
    { path: 'transportes', component: TransportesComponent },
    { path: 'transporte/:id', component: TransporteComponent },
    { path: 'productos', component: ProductosComponent},
    { path: '**', component: CargasComponent }

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });
