import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../services/whatsapp.service';

type ServiceCard = {
  id: string;
  title: string;
  img?: string;
  tag?: string; // "Destacado"
  excerpt: string;
  detailsTitle?: string;
  detailsText?: string;
  benefits?: string[];
  icon?: string; // para cards con ícono (svg)
};

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss',
})
export class Servicios {
  private readonly whatsapp = inject(WhatsappService);
  whatsappHref = this.whatsapp.buildUrl();

  expanded = signal<Set<string>>(new Set());

  toggle(id: string) {
    const next = new Set(this.expanded());
    if (next.has(id)) next.delete(id);
    else next.add(id);
    this.expanded.set(next);
  }

  isExpanded(id: string) {
    return this.expanded().has(id);
  }

  // Ajusta contenido libremente
  heroCards: ServiceCard[] = [
    {
      id: 'diseno',
      title: 'Diseño de Sonrisa',
      img: 'images/SonrisaLanding.jpg',
      tag: 'Destacado',
      excerpt:
        'Transformamos tu sonrisa con técnicas avanzadas de estética dental. Carillas, blanqueamiento y contorneado personalizado para resultados naturales y duraderos.',
      detailsTitle: 'Es un proceso integral que puede incluir',
      detailsText:
        'blanqueamiento, carillas y ortodoncia. Utilizamos la técnica de Mock-up (Planificación Digital) para que puedas visualizar los resultados antes de iniciar el tratamiento.',
      benefits: ['Mayor confianza', 'Estética natural', 'Mordida funcional'],
    },
    {
      id: 'implanto',
      title: 'Rehabilitación e Implantología',
      img: 'images/ImplanteLanding.jpg',
      excerpt:
        'Implantes dentales de última generación, coronas, puentes y prótesis. Recupera la función y estética de tu sonrisa de forma permanente.',
      detailsTitle: '¿Qué incluye?',
      detailsText:
        'Valoración clínica, planificación del caso, rehabilitación protésica y seguimiento post-tratamiento para asegurar resultados estables.',
      benefits: ['Función masticatoria', 'Estabilidad', 'Estética'],
    },
    {
      id: 'orto',
      title: 'Ortodoncia',
      img: 'images/OrtodonciaLanding.jpg',
      excerpt:
        'Alineación dental con brackets metálicos, cerámicos o Invisalign. Tratamientos personalizados para niños, adolescentes y adultos con tecnología 3D.',
      detailsTitle: 'Opciones',
      detailsText:
        'Brackets metálicos, cerámicos o alineadores. Plan de control y ajustes periódicos según objetivos del caso.',
      benefits: ['Alineación', 'Mejor oclusión', 'Sonrisa armónica'],
    },
  ];

  specialties: ServiceCard[] = [
    {
      id: 'general',
      title: 'Odontología General',
      icon: 'icons/stethoscope.png',
      excerpt: 'Base del cuidado bucal: prevención, diagnóstico y limpiezas profesionales.',
      detailsText:
        'Evaluación general, profilaxis, planes preventivos y orientación personalizada para mantener tu salud oral.',
      benefits: ['Prevención', 'Diagnóstico', 'Limpiezas'],
    },
    {
      id: 'blanqueamiento',
      title: 'Blanqueamiento Dental',
      icon: 'icons/sun.svg',
      excerpt: 'Aclara el tono de tus dientes para una sonrisa brillante.',
      detailsText:
        'Tratamientos clínicos y/o supervisados. Indicaciones según sensibilidad y tono objetivo.',
      benefits: ['Más brillo', 'Tono uniforme', 'Confianza'],
    },
    {
      id: 'endo',
      title: 'Endodoncia (Tratamiento de Conducto)',
      icon: 'icons/heart.svg',
      excerpt: 'Salvamos tus dientes tratando la pulpa dental infectada.',
      detailsText:
        'Control del dolor, limpieza del conducto, obturación y restauración según el caso.',
      benefits: ['Alivio', 'Conservación', 'Función'],
    },
    {
      id: 'perio',
      title: 'Periodoncia',
      icon: 'icons/shield.svg',
      excerpt: 'Cuidado de las encías y tejidos de soporte.',
      detailsText:
        'Diagnóstico periodontal, control de placa, raspado y alisado radicular cuando aplica.',
      benefits: ['Encías sanas', 'Soporte dental', 'Prevención'],
    },
    {
      id: 'cirugia',
      title: 'Cirugía Oral',
      icon: 'icons/scissors.svg',
      excerpt: 'Procedimientos quirúrgicos especializados en boca y mandíbula.',
      detailsText:
        'Extracciones complejas, cirugías menores y procedimientos indicados por valoración clínica.',
      benefits: ['Seguridad', 'Recuperación', 'Control'],
    },
  ];
}