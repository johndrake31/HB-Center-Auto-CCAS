import { TestBed } from '@angular/core/testing';

import { AuthProUserGuard } from './auth-pro-user.guard';

describe('AuthProUserGuard', () => {
  let guard: AuthProUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthProUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
