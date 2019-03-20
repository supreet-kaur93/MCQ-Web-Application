import { TestBed } from '@angular/core/testing';

import { McqModulesService } from './mcq-modules.service';

describe('McqModulesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: McqModulesService = TestBed.get(McqModulesService);
    expect(service).toBeTruthy();
  });
});
