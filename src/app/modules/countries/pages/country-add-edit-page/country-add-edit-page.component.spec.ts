import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAddEditPageComponent } from './country-add-edit-page.component';

describe('CountryAddEditPageComponent', () => {
  let component: CountryAddEditPageComponent;
  let fixture: ComponentFixture<CountryAddEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryAddEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryAddEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
