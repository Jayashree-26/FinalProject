import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { CheckoutService } from './checkout.service';

describe('Service: Checkout', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckoutService],
      imports: [HttpClientTestingModule] // Import HttpClientTestingModule
    });
  });

  it('should ...', inject([CheckoutService], (service: CheckoutService) => {
    expect(service).toBeTruthy();
  }));
});
