import { Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';

export const appRoutes: Routes = [
  {
    path: 'shop-item',
    loadChildren: () =>
      import('./shop-item/shop-item.module').then((m) => m.ShopItemModule),
  },
  { path: 'second-component', component: SecondComponent },
  { path: '', redirectTo: 'shop-item', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
