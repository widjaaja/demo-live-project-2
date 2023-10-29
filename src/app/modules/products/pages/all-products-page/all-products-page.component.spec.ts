import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllProductsPageComponent } from './all-products-page.component';

describe('AllProductsPageComponent', () => {
  let component: AllProductsPageComponent;
  let fixture: ComponentFixture<AllProductsPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProductsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
