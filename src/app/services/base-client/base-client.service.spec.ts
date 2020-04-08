import { TestBed } from '@angular/core/testing';

import { BaseClientService } from './base-client.service';

describe('BaseClientService', () => {
  let service: BaseClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
