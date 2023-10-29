import { TestBed } from '@angular/core/testing';

import { RequestTrialService } from './request-trial.service';

describe('RequestTrialService', () => {
  let service: RequestTrialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestTrialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
