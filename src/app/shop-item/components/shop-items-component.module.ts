import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopItemFiltersComponent } from './shop-item-filters/shop-item-filters.component';

@NgModule({
  declarations: [ShopItemFiltersComponent],
  imports: [CommonModule],
  exports: [ShopItemFiltersComponent],
})
export class ShopItemsComponentModule {}
