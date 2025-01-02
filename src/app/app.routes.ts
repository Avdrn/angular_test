import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ShopItemComponent } from './shop-item/shop-item.component';

export const routes: Routes = [
  { path: 'shop-item', component: ShopItemComponent },
  { path: 'second-component', component: SecondComponent },
  { path: '', redirectTo: '/shop-itemt', pathMatch: 'full' },
  { path: '**', component: ShopItemComponent },
];
