import { TestBed } from '@angular/core/testing';

import { DiseaseCovidService } from './disease-covid.service';

describe('DiseaseCovidService', () => {
  let service: DiseaseCovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiseaseCovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
