import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WhatsappService } from '../../services/whatsapp.service';

type CasoModo = 'single' | 'compare';

interface CasoExitoItem {
  id: string;
  titulo: string;
  modo: CasoModo;
  image?: string; // para single
  beforeImg?: string; // para compare
  afterImg?: string; // para compare
  slider?: number; // 0..100
}

@Component({
  selector: 'app-casos-exito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './casos-exito.html',
  styleUrl: './casos-exito.scss',
})
export class CasosExito {
  constructor(private whatsapp: WhatsappService) {}

  casos: CasoExitoItem[] = [
    // ===== 2 PRIMEROS: imagen única con antes/después en la misma pieza =====
    {
      id: 'c1',
      titulo: 'Caso de Éxito 1',
      modo: 'single',
      image: 'images/caso-1.jpg',
    },
    {
      id: 'c2',
      titulo: 'Caso de Éxito 2',
      modo: 'single',
      image: 'images/caso-2.jpg',
    },

    // ===== 7 CASOS CON COMPARADOR =====
    {
      id: 'c3',
      titulo: 'Caso de Éxito 3',
      modo: 'compare',
      beforeImg: 'images/caso-3-before.jpeg',
      afterImg: 'images/caso-3-after.jpeg',
      slider: 50,
    },
    {
      id: 'c4',
      titulo: 'Caso de Éxito 4',
      modo: 'compare',
      beforeImg: 'images/caso-4-before.jpeg',
      afterImg: 'images/caso-4-after.jpeg',
      slider: 50,
    },
    {
      id: 'c5',
      titulo: 'Caso de Éxito 5',
      modo: 'compare',
      beforeImg: 'images/caso-5-before.jpeg',
      afterImg: 'images/caso-5-after.jpeg',
      slider: 50,
    },
    {
      id: 'c6',
      titulo: 'Caso de Éxito 6',
      modo: 'compare',
      beforeImg: 'images/caso-6-before.jpeg',
      afterImg: 'images/caso-6-after.jpeg',
      slider: 50,
    },
    {
      id: 'c7',
      titulo: 'Caso de Éxito 7',
      modo: 'compare',
      beforeImg: 'images/caso-7-before.jpeg',
      afterImg: 'images/caso-7-after.jpeg',
      slider: 50,
    },
    {
      id: 'c8',
      titulo: 'Caso de Éxito 8',
      modo: 'compare',
      beforeImg: 'images/caso-8-before.jpeg',
      afterImg: 'images/caso-8-after.jpeg',
      slider: 50,
    },
    {
      id: 'c9',
      titulo: 'Caso de Éxito 9',
      modo: 'compare',
      beforeImg: 'images/caso-9-before.jpeg',
      afterImg: 'images/caso-9-after.jpeg',
      slider: 50,
    },
  ];

  onSliderInput(item: CasoExitoItem, value: string | number) {
    const v = typeof value === 'string' ? Number(value) : value;
    item.slider = Number.isFinite(v) ? Math.min(100, Math.max(0, v)) : 50;
  }

  openWhatsapp() {
    this.whatsapp.open(
      'Hola, quiero agendar una valoración. Vi los casos de éxito y me gustaría más información.',
    );
  }
}
