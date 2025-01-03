import { Component } from '@angular/core';
import { ShopItemFiltersComponent } from './components/shop-item-filters/shop-item-filters.component';

@Component({
  selector: 'shop-item',
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.scss',
  standalone: true,
  imports: [ShopItemFiltersComponent],
})
export class ShopItemComponent { }
