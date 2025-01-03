import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import '@ui5/webcomponents/dist/Label';
import '@ui5/webcomponents/dist/TableCell';
import { RowData } from '../../types/row-data.type';


@Component({
  selector: 'shop-item-row',
  imports: [CommonModule],
  templateUrl: './shop-item-row.component.html',
  styleUrl: './shop-item-row.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShopItemRowComponent {
  @Input() rowData: RowData = { key: '', interactive: false, cells: [] };

}
