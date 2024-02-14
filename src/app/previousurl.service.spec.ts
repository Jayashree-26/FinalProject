/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PreviousurlService } from './previousurl.service';

describe('Service: Previousurl', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreviousurlService]
    });
  });

  it('should ...', inject([PreviousurlService], (service: PreviousurlService) => {
    expect(service).toBeTruthy();
  }));
});
