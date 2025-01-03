import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@ui5/webcomponents/dist/Option';
import '@ui5/webcomponents/dist/Select';
import '@ui5/webcomponents/dist/Title';
@Component({
  selector: 'shop-item-filters',
  templateUrl: './shop-item-filters.component.html',
  styleUrls: ['./shop-item-filters.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShopItemFiltersComponent { }
