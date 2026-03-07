import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { WhatsappService } from '../../services/whatsapp.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

type SedeId = 'poblado' | 'centro';

interface SedeItem {
  id: SedeId;
  chipTop: string;
  titulo: string;
  direccion: string;
  edificio: string;
  mapsUrl: string;
  phoneDisplay: string;
  phoneHref: string;
  image?: string;
}

@Component({
  selector: 'app-sedes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sedes.html',
  styleUrl: './sedes.scss',
})
export class Sedes {
  private readonly whatsapp = inject(WhatsappService);
  private readonly sanitizer = inject(DomSanitizer);

  whatsappHref = this.whatsapp.buildUrl();

  sedes: SedeItem[] = [
    {
      id: 'poblado',
      chipTop: 'Torre Medica',
      titulo: 'Sede El Poblado',
      direccion: 'Calle 7 N° 39 - 107, Consultorio 911',
      edificio: 'Torre Medical',
      mapsUrl: 'https://www.google.com/maps', // pon aquí tu link real de esa sede
      phoneDisplay: '(57) 320 698 48 42',
      phoneHref: 'tel:+573206984842',
    },
    {
      id: 'centro',
      chipTop: 'Torre Fundadores',
      titulo: 'Sede Centro',
      direccion: 'Calle 54 N° 46 - 27, Consultorio 1205',
      edificio: 'Torre Fundadores',
      mapsUrl: 'https://www.google.com/maps', // pon aquí tu link real de esa sede
      phoneDisplay: '(4) 322 97 67',
      phoneHref: 'tel:+5743229767',
    },
  ];

  // ✅ My Maps embed (2 puntos seleccionables)
  mapEmbedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.google.com/maps/d/embed?mid=10Mdg-lVBLJExDwI-0xR6LfiB5EBrvpI&ehbc=2E312F&noprof=1'
  );

  openWhatsapp(): void {
    this.whatsapp.open();
  }
}