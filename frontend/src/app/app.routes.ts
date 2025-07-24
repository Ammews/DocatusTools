import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QrcodeComponent } from './pages/qrcode/qrcode.component';
import { ArquivosComponent } from './pages/arquivos/arquivos.component';
import { LinksComponent } from './pages/links/links.component';
import { CurriculosComponent } from './pages/curriculos/curriculos.component';

export const routes: Routes = [

    {
        path:"",
        component: HomeComponent
    },
    {
        path:"qrcode",
        component: QrcodeComponent
    },
    {
        path:"arquivos",
        component: ArquivosComponent
    },
    {
        path:"links",
        component: LinksComponent
    },
    {
        path:"curriculo",
        component: CurriculosComponent
    }


];
