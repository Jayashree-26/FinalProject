/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddtocartService } from './addtocart.service';

describe('Service: Addtocart', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddtocartService]
    });
  });

  it('should ...', inject([AddtocartService], (service: AddtocartService) => {
    expect(service).toBeTruthy();
  }));
});
