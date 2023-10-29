import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseServerEditPageComponent } from './license-server-edit-page.component';

describe('LicenseServerEditPageComponent', () => {
  let component: LicenseServerEditPageComponent;
  let fixture: ComponentFixture<LicenseServerEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseServerEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseServerEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
