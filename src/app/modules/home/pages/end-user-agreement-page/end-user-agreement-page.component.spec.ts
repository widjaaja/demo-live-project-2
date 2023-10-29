import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserAgreementPageComponent } from './end-user-agreement-page.component';

describe('EndUserAgreementPageComponent', () => {
  let component: EndUserAgreementPageComponent;
  let fixture: ComponentFixture<EndUserAgreementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndUserAgreementPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndUserAgreementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
