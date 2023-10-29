import { TestBed } from '@angular/core/testing';

import { ActionLogsApiService } from './action-logs-api.service';

describe('ActionLogsApiService', () => {
  let service: ActionLogsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionLogsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
