import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WhatsappService } from '../../services/whatsapp.service';

type CasoCategoria = 'todos' | 'diseno' | 'ortodoncia' | 'implantes';

interface CasoExitoItem {
  id: string;
  categoria: Exclude<CasoCategoria, 'todos'>;
  categoriaLabel: string;
  titulo: string;
  caracteristicas: string;
  resultado: string;
  testimonio: string;
  beforeImg: string;
  afterImg: string;
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
  constructor(private whatsapp: WhatsappService) { }

  active: CasoCategoria = 'todos';

  filters: { id: CasoCategoria; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'diseno', label: 'Diseño de Sonrisa' },
    { id: 'ortodoncia', label: 'Ortodoncia' },
    { id: 'implantes', label: 'Implantes' },
  ];

  casos: CasoExitoItem[] = [
    // ===== FILA 1 (como tus capturas) =====
    {
      id: 'c1',
      categoria: 'implantes',
      categoriaLabel: 'Implantes',
      titulo: 'Rehabilitación con Implantes',
      caracteristicas:
        'Reposición de piezas perdidas mediante implantes de titanio, recuperando la función masticatoria y estética.',
      resultado: 'Recuperación completa de la función masticatoria con resultados permanentes.',
      testimonio: '“Después de años sin poder comer bien, ahora disfruto de todas las comidas.”',
      beforeImg: 'images/implantes-1-before.jpeg',
      afterImg: 'images/implantes-1-after.jpeg',
      slider: 50,
    },
    {
      id: 'c2',
      categoria: 'diseno',
      categoriaLabel: 'Diseño de Sonrisa',
      titulo: 'Transformación Completa de Sonrisa',
      caracteristicas:
        'Paciente con dientes desgastados y desalineados. Tratamiento integral con carillas y contorneado gingival.',
      resultado: 'Sonrisa armoniosa que rejuveneció la apariencia facial del paciente.',
      testimonio: '“Parece que tengo 10 años menos. El equipo de Oral Estetic es extraordinario.”',
      beforeImg: 'images/implantes-1-before.jpeg',
      afterImg: 'images/implantes-1-after.jpeg',
      slider: 50,
    },
    {
      id: 'c3',
      categoria: 'ortodoncia',
      categoriaLabel: 'Ortodoncia',
      titulo: 'Ortodoncia con Brackets de Zafiro',
      caracteristicas:
        'Corrección de maloclusión clase II con brackets de zafiro durante 18 meses.',
      resultado: 'Mordida funcional y estética dental mejorada significativamente.',
      testimonio: '“El tratamiento fue cómodo y los resultados superaron mis expectativas.”',
      beforeImg: 'images/implantes-1-before.jpeg',
      afterImg: 'images/implantes-1-after.jpeg',
      slider: 50,
    },

    // ===== FILA 2 (3 cards faltantes) =====
    {
      id: 'c4',
      categoria: 'ortodoncia',
      categoriaLabel: 'Ortodoncia',
      titulo: 'Restauración Estética Integral',
      caracteristicas:
        'Paciente presentaba desgaste dental y manchas severas. Se realizó un diseño de sonrisa con carillas de porcelana y blanqueamiento previo.',
      resultado: 'Mejora en la simetría facial y armonía del color.',
      testimonio:
        '“Cambió mi vida y mi forma de sonreír. Gracias a Oral Estetic por su profesionalismo.”',
      beforeImg: 'images/implantes-1-before.jpeg',
      afterImg: 'images/implantes-1-after.jpeg',
      slider: 50,
    },
    {
      id: 'c5',
      categoria: 'ortodoncia',
      categoriaLabel: 'Ortodoncia',
      titulo: 'Corrección de Apiñamiento Severo',
      caracteristicas:
        'Corrección de apiñamiento severo mediante ortodoncia invisible en 12 meses.',
      resultado: 'Alineación perfecta y mordida funcional sin brackets visibles.',
      testimonio:
        '“Nadie notó que llevaba ortodoncia y ahora tengo la sonrisa que siempre quise.”',
      beforeImg: 'images/implantes-1-before.jpeg',
      afterImg: 'images/implantes-1-after.jpeg',
      slider: 50,
    },
    {
      id: 'c6',
      categoria: 'ortodoncia',
      categoriaLabel: 'Ortodoncia',
      titulo: 'Cierre de Diastemas',
      caracteristicas:
        'Armonización de forma y tamaño dental para cierre de diastemas (espacios) con resinas de alta estética.',
      resultado: 'Sonrisa uniforme y natural sin espacios interdentales.',
      testimonio:
        '“Me sentía insegura al sonreír, ahora no puedo parar de hacerlo. ¡Increíble trabajo!”',
      beforeImg: 'images/implantes-1-before.jpeg',
      afterImg: 'images/implantes-1-after.jpeg',
      slider: 50,
    },
  ];

  get filtered(): CasoExitoItem[] {
    if (this.active === 'todos') return this.casos;
    return this.casos.filter((c) => c.categoria === this.active);
  }

  setFilter(id: CasoCategoria) {
    this.active = id;
  }

  onSliderInput(item: CasoExitoItem, value: string | number) {
    const v = typeof value === 'string' ? Number(value) : value;
    item.slider = Number.isFinite(v) ? Math.min(100, Math.max(0, v)) : 50;
  }

  openWhatsapp() {
    this.whatsapp.open(
      'Hola, quiero agendar una valoración. Vi los casos de éxito y me gustaría más información.'
    );
  }
}