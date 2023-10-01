import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaisSobreComponent } from './mais-sobre/mais-sobre.component';
import { MoedasComponent } from './moedas/moedas.component';

const routes: Routes = [
  { path: '', component: MoedasComponent, title: 'Câmbio Preço' },
  { path: 'mais-sobre', component: MaisSobreComponent, title: 'Mais Sobre' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
