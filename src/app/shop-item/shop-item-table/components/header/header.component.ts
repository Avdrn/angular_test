import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { Header } from '../../types/header.type';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HeaderComponent {
  @Input() title: string = '';
  @Input() headers: Header[] = [];
}
