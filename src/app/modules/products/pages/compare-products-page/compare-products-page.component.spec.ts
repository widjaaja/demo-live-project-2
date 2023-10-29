import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareProductsPageComponent } from './compare-products-page.component';

describe('CompareProductsPageComponent', () => {
  let component: CompareProductsPageComponent;
  let fixture: ComponentFixture<CompareProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareProductsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
