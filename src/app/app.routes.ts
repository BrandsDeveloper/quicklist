import { Routes } from '@angular/router';
import { ListaComponent } from './pages/lista/lista.component';
import { ListasComponent } from './pages/listas/listas.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
    },
    {
        path: 'lista',
        component: ListasComponent,
        title: 'Listas de Compras'
    },
    {
        path: 'lista/:id',
        component: ListaComponent
    }
];
