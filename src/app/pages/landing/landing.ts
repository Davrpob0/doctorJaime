import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
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
  private readonly cdr = inject(ChangeDetectorRef);

  whatsappHref = this.whatsapp.buildUrl();

  heroBanners = [
    {
      desktop: 'images/af-banner-1-desktop.jpg',
      mobile: 'images/af-banner-1-mobile.jpg',
      alt: 'Banner 1',
    },
    {
      desktop: 'images/af-banner-2-desktop.jpg',
      mobile: 'images/af-banner-2-mobile.jpg',
      alt: 'Banner 2',
    },
    {
      desktop: 'images/af-banner-3-desktop.jpg',
      mobile: 'images/af-banner-3-mobile.jpg',
      alt: 'Banner 3',
    },
    {
      desktop: 'images/af-banner-4-desktop.jpg',
      mobile: 'images/af-banner-4-mobile.jpg',
      alt: 'Banner 4',
    },
    {
      desktop: 'images/af-banner-5-desktop.jpg',
      mobile: 'images/af-banner-5-mobile.jpg',
      alt: 'Banner 5',
    },
    {
      desktop: 'images/af-banner-6-desktop.jpg',
      mobile: 'images/af-banner-6-mobile.jpg',
      alt: 'Banner 6',
    },
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
    this.cdr.detectChanges();
    this.restartBannerRotation();
  }

  private startBannerRotation(): void {
    if (this.heroBanners.length <= 1) return;

    this.bannerInterval = setInterval(() => {
      this.currentBanner = (this.currentBanner + 1) % this.heroBanners.length;
      this.cdr.detectChanges();
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
