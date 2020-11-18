import { TestBed } from '@angular/core/testing';

import { StepsApiService } from './steps-api.service';

describe('StepsApiService', () => {
  let service: StepsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
