import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShopItemFiltersComponent } from './components/shop-item-filters/shop-item-filters.component';
import { ShopItemRoutingModule } from './shop-item-routing.module';
import { ShopItemComponent } from './shop-item.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ShopItemFiltersComponent,
    ShopItemComponent,
    ShopItemRoutingModule,
  ],
})
export class ShopItemModule { }
