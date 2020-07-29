import { TestBed } from '@angular/core/testing';

import { Reg1Service } from './reg1.service';

describe('Reg1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Reg1Service = TestBed.get(Reg1Service);
    expect(service).toBeTruthy();
  });
});
