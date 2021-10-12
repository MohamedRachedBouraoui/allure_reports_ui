import { TestBed } from '@angular/core/testing';

import { AllureHttpIntercepteurInterceptor } from './allure-http-intercepteur.interceptor';

describe('AllureHttpIntercepteurInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AllureHttpIntercepteurInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AllureHttpIntercepteurInterceptor = TestBed.inject(AllureHttpIntercepteurInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
