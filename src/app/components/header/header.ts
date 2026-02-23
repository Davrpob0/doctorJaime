import { Component, HostListener, inject, signal, OnInit } from '@angular/core'; import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../services/whatsapp.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  private readonly whatsapp = inject(WhatsappService);

  scrolled = signal(false);
  whatsappHref = this.whatsapp.buildUrl();

  ngOnInit(): void {
    this.onScroll();
    console.log('HEADER INIT');
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 10);
  }
}
