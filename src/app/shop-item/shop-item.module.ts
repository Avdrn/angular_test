import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopItemRoutingModule } from './shop-item-routing.module';
import { ShopItemsComponentModule } from './components/shop-items-component.module';
import { ShopItemComponent } from './shop-item.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ShopItemsComponentModule, ShopItemRoutingModule],
})
export class ShopItemModule {}
