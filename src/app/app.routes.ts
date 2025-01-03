import { Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';

export const appRoutes: Routes = [
  {
    path: 'shop-items',
    loadChildren: () =>
      import('./shop-item/shop-item.module').then((m) => m.ShopItemModule),
  },
  { path: 'second-component', component: SecondComponent },
  { path: '', redirectTo: 'shop-items', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
