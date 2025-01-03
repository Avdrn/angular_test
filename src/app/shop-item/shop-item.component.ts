import { Component } from '@angular/core';
import { ShopItemFiltersComponent } from './shop-item-filters/shop-item-filters.component';
import { ShopItemTableComponent } from './shop-item-table/shop-item-table.component';

@Component({
  selector: 'shop-item',
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.scss',
  standalone: true,
  imports: [ShopItemFiltersComponent, ShopItemTableComponent],
})
export class ShopItemComponent { }
