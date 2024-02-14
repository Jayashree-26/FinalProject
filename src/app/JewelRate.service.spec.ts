import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { JewelRateService } from './JewelRate.service';

describe('Service: JewelRate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Add HttpClientTestingModule here
      providers: [JewelRateService]
    });
  });

  it('should ...', inject([JewelRateService], (service: JewelRateService) => {
    expect(service).toBeTruthy();
  }));
});
