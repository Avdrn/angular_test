import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemFiltersComponent } from './shop-item-filters.component';

describe('ShopItemFiltersComponent', () => {
  let component: ShopItemFiltersComponent;
  let fixture: ComponentFixture<ShopItemFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopItemFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopItemFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
