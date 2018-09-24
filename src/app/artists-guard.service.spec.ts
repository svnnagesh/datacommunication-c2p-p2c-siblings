import { TestBed, inject } from '@angular/core/testing';

import { ArtistsGuardService } from './artists-guard.service';

describe('ArtistsGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistsGuardService]
    });
  });

  it('should be created', inject([ArtistsGuardService], (service: ArtistsGuardService) => {
    expect(service).toBeTruthy();
  }));
});
