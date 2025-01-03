import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShopItemsComponentModule } from './components/shop-items-component.module';
import { ShopItemRoutingModule } from './shop-item-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    ShopItemsComponentModule, 
    ShopItemRoutingModule
  ],
})
export class ShopItemModule {}
