import { TestBed, inject } from '@angular/core/testing';

import { DataObservableService } from './data-observable.service';

describe('DataObservableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataObservableService]
    });
  });

  it('should be created', inject([DataObservableService], (service: DataObservableService) => {
    expect(service).toBeTruthy();
  }));
});
