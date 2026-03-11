import { enableProdMode, provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { APP_CONFIG } from './environments/environment';
import { CoreModule } from './app/core/core.module';
import { SharedModule } from './app/shared/shared.module';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { PageNotFoundComponent } from './app/shared/components';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { HomeComponent } from './app/home/home.component';
import { DetailComponent } from './app/detail/detail.component'; 
import { SidebartestComponent } from './app/sidebartest/sidebartest.component';
import { OrdersComponent } from './app/orders/orders.component';
import { ProductsComponent } from './app/products/products.component';
import { CustomersComponent } from './app/customers/customers.component';

if (APP_CONFIG.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),
    provideHttpClient(withInterceptorsFromDi()),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json',
      }),
      fallbackLang: 'en',
      lang: 'en',
    }),
    provideRouter([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },
      {
        path: 'detail',
        component: DetailComponent,
      },
      {
        path: 'sidebar',
        component: SidebartestComponent,
      },

      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ]),
    importProvidersFrom(CoreModule, SharedModule),
  ],
}).catch((err) => console.error(err));
