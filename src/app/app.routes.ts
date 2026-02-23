import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Nosotros } from './pages/nosotros/nosotros';
import { Servicios } from './pages/servicios/servicios';

export const routes: Routes = [
    { path: '', component: Landing },
    { path: 'nosotros', component: Nosotros },
    { path: 'servicios', component: Servicios },
    { path: '**', redirectTo: '' },
];
