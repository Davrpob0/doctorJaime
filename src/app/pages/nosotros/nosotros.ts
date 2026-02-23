import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../services/whatsapp.service';

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

  // Si luego quieres disparar descarga real, cambia a tu ruta final
  financialPdfHref = '/docs/estados-financieros.pdf';
}
