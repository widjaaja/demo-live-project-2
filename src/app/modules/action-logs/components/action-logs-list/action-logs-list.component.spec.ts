import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionLogsListComponent } from './action-logs-list.component';

describe('ActionLogsListComponent', () => {
  let component: ActionLogsListComponent;
  let fixture: ComponentFixture<ActionLogsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionLogsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionLogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
