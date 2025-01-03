import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemTableComponent } from './shop-item-table.component';

describe('ShopItemTableComponent', () => {
  let component: ShopItemTableComponent;
  let fixture: ComponentFixture<ShopItemTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopItemTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopItemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
