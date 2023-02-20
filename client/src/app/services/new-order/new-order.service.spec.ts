import { TestBed } from '@angular/core/testing';

import { NewOrderService } from './new-order.service';

describe('NewOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewOrderService = TestBed.get(NewOrderService);
    expect(service).toBeTruthy();
  });
});
