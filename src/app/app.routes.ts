import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Nosotros } from './pages/nosotros/nosotros';
import { Servicios } from './pages/servicios/servicios';
import { Sedes } from './pages/sedes/sedes';
import { CasosExito } from './pages/casos-exito/casos-exito';
import { Pacientes } from './pages/pacientes/pacientes';

export const routes: Routes = [
    { path: '', component: Landing },
    { path: 'nosotros', component: Nosotros },
    { path: 'servicios', component: Servicios },
    { path: 'sedes', component: Sedes },
    { path: 'casos-exito', component: CasosExito },
    { path: 'pacientes', component: Pacientes },
    { path: '**', redirectTo: '' },
];
