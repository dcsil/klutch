import { TestBed } from '@angular/core/testing';

import { TesseractService } from './tesseract.service';

describe('TesseractService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TesseractService = TestBed.get(TesseractService);
    expect(service).toBeTruthy();
  });
});
