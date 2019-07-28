import { TestBed } from '@angular/core/testing';

import { CardlessService } from './cardless.service';

describe('CardlessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardlessService = TestBed.get(CardlessService);
    expect(service).toBeTruthy();
  });
});
