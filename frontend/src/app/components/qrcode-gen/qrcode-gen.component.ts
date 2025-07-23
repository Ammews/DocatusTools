import { Component, ViewChild, ElementRef} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-qrcode-gen',
  imports: [QRCodeComponent, FormsModule],
  templateUrl: './qrcode-gen.component.html',
  styleUrl: './qrcode-gen.component.scss'
})
export class QrcodeGenComponent {
 link: string = '';
  qrData: string = '';

  createQRCode() {
    this.qrData = this.link;
  }

 downloadQRCode() {
    const container = document.querySelector('#qrcode');
    if (!container) {
      console.error('Elemento #qrcode não encontrado.');
      return;
    }

    const tryDownload = () => {
      const canvas = container.querySelector('canvas') as HTMLCanvasElement;
      if (!canvas) return;

      const dataUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = 'qrcode.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };

    // Se já existe o canvas, baixa direto
    if (container.querySelector('canvas')) {
      tryDownload();
      return;
    }

    // Se ainda não existe, observa até aparecer
    const observer = new MutationObserver(() => {
      const canvas = container.querySelector('canvas') as HTMLCanvasElement;
      if (canvas) {
        observer.disconnect();
        tryDownload();
      }
    });

    observer.observe(container, { childList: true, subtree: true });
  }
}
