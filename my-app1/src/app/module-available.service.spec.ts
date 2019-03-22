import { TestBed } from '@angular/core/testing';

import { ModuleAvailableService } from './module-available.service';

describe('ModuleAvailableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModuleAvailableService = TestBed.get(ModuleAvailableService);
    expect(service).toBeTruthy();
  });
});
