import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionLogsListPageComponent } from './action-logs-list-page.component';

describe('ActionLogsListPageComponent', () => {
  let component: ActionLogsListPageComponent;
  let fixture: ComponentFixture<ActionLogsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionLogsListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionLogsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
