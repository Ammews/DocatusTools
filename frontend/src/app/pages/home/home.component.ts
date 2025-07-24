import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QRCodeComponent } from 'angularx-qrcode';
import { QrcodeGenComponent } from "../../components/qrcode-gen/qrcode-gen.component";
import { ServicesComponent } from '../../components/services/services.component';
import { CardComponent } from '../../components/card/card.component';
declare var adsbygoogle: any;

@Component({
  selector: 'app-home',
  imports: [QrcodeGenComponent, ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ngAfterViewInit(): void {
  try {
    (window as any).adsbygoogle = (window as any).adsbygoogle || [];
    (window as any).adsbygoogle.push({});
  } catch (e) {
    console.error('Erro ao carregar anúncio:', e);
  }
}
}
