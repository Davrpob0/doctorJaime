import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WhatsappService {
    private readonly phoneE164Digits = '573206984842';

    private readonly defaultMessage = 'Hola, quisiera agendar una cita odontológica.';

    buildUrl(message: string = this.defaultMessage): string {
        const text = encodeURIComponent(message);
        return `https://wa.me/${this.phoneE164Digits}?text=${text}`;
    }

    open(message?: string): void {
        const url = this.buildUrl(message);
        window.open(url, '_blank', 'noopener,noreferrer');
    }
}
