import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../services/whatsapp.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  private readonly whatsapp = inject(WhatsappService);

  whatsappHref = this.whatsapp.buildUrl();

  goWhatsapp(): void {
    this.whatsapp.open();
  }
}
