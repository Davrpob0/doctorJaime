import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../services/whatsapp.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing implements OnInit, OnDestroy {
  private readonly whatsapp = inject(WhatsappService);

  whatsappHref = this.whatsapp.buildUrl();

  heroBanners: string[] = [
    'images/hero.jpg',
    'images/hero.jpg',
    'images/hero.jpg',
    'images/hero.jpg',
    'images/hero.jpg',
  ];

  currentBanner = 0;
  private bannerInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.startBannerRotation();
  }

  ngOnDestroy(): void {
    this.stopBannerRotation();
  }

  goWhatsapp(): void {
    this.whatsapp.open();
  }

  setCurrentBanner(index: number): void {
    this.currentBanner = index;
    this.restartBannerRotation();
  }

  private startBannerRotation(): void {
    if (this.heroBanners.length <= 1) return;

    this.bannerInterval = setInterval(() => {
      this.currentBanner = (this.currentBanner + 1) % this.heroBanners.length;
    }, 4000);
  }

  private stopBannerRotation(): void {
    if (this.bannerInterval) {
      clearInterval(this.bannerInterval);
      this.bannerInterval = null;
    }
  }

  private restartBannerRotation(): void {
    this.stopBannerRotation();
    this.startBannerRotation();
  }
}
