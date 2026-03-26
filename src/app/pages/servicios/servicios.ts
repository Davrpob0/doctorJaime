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
  services: ServiceCard[] = [
    {
      id: 'diseno',
      title: 'Diseño de Sonrisa',
      img: 'images/SonrisaLanding.jpg',
      tag: 'Destacado',
      excerpt:
        'Plan personalizado que armoniza color, forma, tamaño y posición dental con tus facciones, combinando tratamientos estéticos y funcionales.',
      detailsTitle: '¿Qué incluye?',
      detailsText:
        'Evaluación clínica y estética, fotos/radiografías/escaneo 3D y planificación digital (Mock-up) para visualizar el resultado antes de iniciar. Puede integrar blanqueamiento, carillas (resina o porcelana), ortodoncia, contorneado dental y manejo del contorno gingival según el caso.',
      benefits: ['Armonía facial', 'Estética natural', 'Mejor función'],
    },
    {
      id: 'orto',
      title: 'Ortodoncia',
      img: 'images/OrtodonciaLanding.jpg',
      excerpt:
        'Especialidad que corrige alineación dental y mordida (maloclusión) para mejorar estética, salud y función, con brackets o alineadores.',
      detailsTitle: '¿Qué corrige?',
      detailsText:
        'Apiñamiento, diastemas (espacios), problemas de mordida y dientes protruidos. Opciones de tratamiento: brackets metálicos, cerámicos o alineadores transparentes. Incluye controles y ajustes periódicos según el objetivo del caso.',
      benefits: ['Alineación', 'Mejor oclusión', 'Higiene más fácil'],
    },
    {
      id: 'implanto',
      title: 'Rehabilitación e Implantología',
      img: 'images/ImplanteLanding.jpg',
      excerpt:
        'Recupera piezas perdidas con implantes y rehabilitación protésica (coronas/puentes/prótesis), devolviendo estética, masticación y comodidad.',
      detailsTitle: '¿Cómo funciona?',
      detailsText:
        'La implantología coloca implantes de titanio que sustituyen la raíz y se integran al hueso (osteointegración). La rehabilitación oral completa restaura función y estética con prótesis fijas o removibles sobre implantes, ajustando mordida y estabilidad.',
      benefits: ['Función masticatoria', 'Estabilidad', 'Resultados duraderos'],
    },
    {
      id: 'blanqueamiento',
      title: 'Blanqueamiento Dental',
      img: 'images/BlanqueamientoLanding.jpg',
      excerpt:
        'Tratamiento estético para aclarar el tono dental y eliminar manchas superficiales y profundas.',
      detailsTitle: '¿Cómo se realiza?',
      detailsText:
        'Se realiza con geles blanqueadores (peróxido) en consultorio, para resultados más rápidos, o en casa con férulas personalizadas y supervisión profesional, según sensibilidad y objetivo.',
      benefits: ['Tono más claro', 'Sonrisa brillante', 'Resultados controlados'],
    },
    {
      id: 'endo',
      title: 'Endodoncia',
      img: 'images/EndodonciaLanding.jpg',
      excerpt:
        'Tratamiento de conducto para salvar dientes con pulpa inflamada o infectada y evitar la extracción.',
      detailsTitle: '¿En qué consiste?',
      detailsText:
        'Consiste en acceder al diente, limpiar y desinfectar los conductos, sellarlos con material biocompatible y restaurar la pieza con resina o corona para protegerla.',
      benefits: ['Alivio del dolor', 'Conservación dental', 'Evita extracción'],
    },
    {
      id: 'perio',
      title: 'Periodoncia',
      img: 'images/PeriodonciaLanding.jpg',
      excerpt:
        'Prevención y tratamiento de enfermedades de encías y tejidos de soporte, como gingivitis y periodontitis.',
      detailsTitle: '¿Qué trata?',
      detailsText:
        'Incluye diagnóstico periodontal, higiene profesional profunda, raspado y alisado radicular, y en casos avanzados procedimientos quirúrgicos o injertos para controlar la infección y preservar hueso.',
      benefits: ['Encías sanas', 'Previene pérdida dental', 'Control de infección'],
    },
    {
      id: 'cirugia',
      title: 'Cirugía Oral',
      img: 'images/CirugiaOralLanding.jpg',
      excerpt:
        'Procedimientos quirúrgicos en boca y mandíbula realizados por especialista, según valoración clínica.',
      detailsTitle: '¿Qué incluye?',
      detailsText:
        'Extracciones complejas, cirugías menores y otros procedimientos indicados para resolver condiciones que requieren intervención quirúrgica, con enfoque en seguridad y recuperación.',
      benefits: ['Seguridad clínica', 'Recuperación guiada', 'Resolución efectiva'],
    },
  ];
}
