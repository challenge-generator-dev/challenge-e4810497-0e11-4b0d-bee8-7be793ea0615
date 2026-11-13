import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { OrderService } from './core/services/order.service';
import { mapOrderDtoToOrder } from './core/models/order.model';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch()),
    provideRouter([]),
    provideAnimationsAsync(),
    {
      provide: OrderService,
      useFactory: (httpClient: any) => {
        return new OrderService(httpClient);
      },
      deps: []
    }
  ]
};