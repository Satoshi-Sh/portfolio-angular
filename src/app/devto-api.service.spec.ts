import { TestBed } from '@angular/core/testing';

import { DevtoApiService } from './devto-api.service';

describe('DevtoApiService', () => {
  let service: DevtoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevtoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
