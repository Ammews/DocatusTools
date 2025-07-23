import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QRCodeComponent } from 'angularx-qrcode';
import { QrcodeGenComponent } from "../../components/qrcode-gen/qrcode-gen.component";

@Component({
  selector: 'app-home',
  imports: [QrcodeGenComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
