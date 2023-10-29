import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewaySuccessComponent } from './gateway-success.component';

describe('GatewaySuccessComponent', () => {
  let component: GatewaySuccessComponent;
  let fixture: ComponentFixture<GatewaySuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewaySuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewaySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
