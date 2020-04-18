import { TestBed } from '@angular/core/testing';

import { BaseClientService } from './base-client.service';
import { HttpClientModule } from '@angular/common/http';

describe('BaseClientService', () => {
  let service: BaseClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });

    service = TestBed.inject(BaseClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
