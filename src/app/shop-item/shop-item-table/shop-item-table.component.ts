import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@ui5/webcomponents/dist/Table';
import '@ui5/webcomponents/dist/TableCell';
import "@ui5/webcomponents/dist/TableHeaderRow";
import '@ui5/webcomponents/dist/TableRow';
import { HeaderComponent } from './components/header/header.component';
import { ShopItemRowComponent } from './components/shop-item-row/shop-item-row.component';
import { Header } from './types/header.type'; // Import the Header type
import { RowData } from './types/row-data.type'; // Import the RowData type


@Component({
  selector: 'shop-item-table',
  imports: [HeaderComponent, ShopItemRowComponent, CommonModule],
  templateUrl: './shop-item-table.component.html',
  styleUrl: './shop-item-table.component.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ShopItemTableComponent {
  headers: Header[] = [
    { label: 'Product', width: '300px' },
    { label: 'Supplier', width: '200px' },
    { label: 'Dimensions', width: '300px' },
    { label: 'Weight', width: '100px' },
    { label: 'Price', width: '220px' }
  ];

  rows: RowData[] = [
    {
      key: 'a',
      interactive: true,
      cells: [
        { value: 'Notebook Basic 15', unit: 'HT-1000', color: '' },
        { value: 'Very Best Screens', unit: '', color: '' },
        { value: '30 x 18 x 3 cm', unit: '', color: '' },
        { value: '4.2', unit: 'KG', color: '#2b7c2b' },
        { value: '956', unit: 'EUR', color: '' }
      ]
    },
    {
      key: 'b',
      interactive: false,
      cells: [
        { value: 'Notebook Basic 17', unit: 'HT-1001', color: '' },
        { value: 'Smartcards', unit: '', color: '' },
        { value: '29 x 17 x 3.1 cm', unit: '', color: '' },
        { value: '4.5', unit: 'KG', color: '#2b7c2b' },
        { value: '1249', unit: 'EUR', color: '' }
      ]
    },
    {
      key: 'c',
      interactive: true,
      cells: [
        { value: 'Notebook Basic 18', unit: 'HT-1002', color: '' },
        { value: 'Technocom', unit: '', color: '' },
        { value: '32 x 21 x 4 cm', unit: '', color: '' },
        { value: '3.7', unit: 'KG', color: '#2b7c2b' },
        { value: '29', unit: 'EUR', color: '' }
      ]
    }
  ];
}
