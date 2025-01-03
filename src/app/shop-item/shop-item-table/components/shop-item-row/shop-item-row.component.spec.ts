import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemRowComponent } from './shop-item-row.component';

describe('ShopItemRowComponent', () => {
  let component: ShopItemRowComponent;
  let fixture: ComponentFixture<ShopItemRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopItemRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopItemRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
