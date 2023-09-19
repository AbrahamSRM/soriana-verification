import { TestBed } from '@angular/core/testing';

import { SorianaService } from './soriana.service';

describe('SorianaService', () => {
  let service: SorianaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SorianaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
