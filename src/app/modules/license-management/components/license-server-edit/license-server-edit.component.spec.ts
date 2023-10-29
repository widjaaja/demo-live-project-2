import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseServerEditComponent } from './license-server-edit.component';

describe('LicenseServerEditComponent', () => {
  let component: LicenseServerEditComponent;
  let fixture: ComponentFixture<LicenseServerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseServerEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseServerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
