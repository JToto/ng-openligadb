import { TestBed } from '@angular/core/testing';

import { OpenLigaDBService } from './ng-openligadb.service';

describe('OpenLigaDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenLigaDBService = TestBed.get(OpenLigaDBService);
    expect(service).toBeTruthy();
  });
});
