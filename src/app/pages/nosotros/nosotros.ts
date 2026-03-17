import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../services/whatsapp.service';

interface ValorCard {
  icono: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.scss',
})
export class Nosotros {
  private readonly whatsapp = inject(WhatsappService);
  whatsappHref = this.whatsapp.buildUrl();
  financialPdfHref = '/docs/estados-financieros.pdf';

  valoresTop: ValorCard[] = [
    {
      icono: '❤',
      titulo: 'Pacientes Primero',
      descripcion:
        'El corazón de nuestra institución son nuestros pacientes. Ellos garantizan nuestra estabilidad y desarrollo.',
    },
    {
      icono: '⛨',
      titulo: 'Compromiso',
      descripcion:
        'Seguridad, oportunidad, confiabilidad y sensibilidad en nuestro servicio son nuestra razón de ser.',
    },
    {
      icono: '💡',
      titulo: 'Innovación',
      descripcion:
        'Cambio e innovación: enfrentamos activamente los retos, nos adaptamos y aprovechamos las oportunidades del entorno.',
    },
  ];

  valoresBottom: ValorCard[] = [
    {
      icono: '👥',
      titulo: 'Desarrollo Humano',
      descripcion:
        'Promovemos la formación, el crecimiento personal y profesional de nuestros colaboradores.',
    },
    {
      icono: '✿',
      titulo: 'Respeto',
      descripcion:
        'Aceptamos la diversidad cultural, religiosa y de género. El respeto es fundamental.',
    },
  ];
}
