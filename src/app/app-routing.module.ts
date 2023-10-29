import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AuthGuardService as AuthGuard
} from './shared/services/auth-guard.service';
import { MainLayoutComponent } from './layouts/main/main-layout/main-layout.component';
import { EmailLayoutsAddEditPageComponent } from './modules/email-layouts/pages/email-layouts-add-edit-page/email-layouts-add-edit-page.component';
import { EmailLayoutsListPageComponent } from './modules/email-layouts/pages/email-layouts-list-page/email-layouts-list-page.component';
import { EmailTemplatesAddEditPageComponent } from './modules/email-templates/pages/email-templates-add-edit-page/email-templates-add-edit-page.component';
import { EmailTemplatesListPageComponent } from './modules/email-templates/pages/email-templates-list-page/email-templates-list-page.component';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { ProductAddEditPageComponent } from './modules/products/pages/product-add-edit-page/product-add-edit-page.component';
import { ProductsListPageComponent } from './modules/products/pages/products-list-page/products-list-page.component';
import { CountriesListPageComponent } from './modules/countries/pages/countries-list-page/countries-list-page.component';
import { CountryAddEditPageComponent } from './modules/countries/pages/country-add-edit-page/country-add-edit-page.component';
import { AdminDashboardPageComponent } from './modules/user-account/pages/admin-dashboard-page/admin-dashboard-page.component';
import { LoginPageComponent } from './modules/user-account/pages/login-page/login-page.component';
import { RegisterPageComponent } from './modules/user-account/pages/register-page/register-page.component';
import { AboutPageComponent } from './modules/home/pages/about-page/about-page.component';
import { ContactUsComponent } from './modules/home/pages/contact-us/contact-us.component';
import { ProductDetailPageComponent } from './modules/products/pages/product-detail-page/product-detail-page.component';
import { CustomerListPageComponent } from './modules/customers/pages/customer-list-page/customer-list-page.component';
import { CustomerAddEditPageComponent } from './modules/customers/pages/customer-add-edit-page/customer-add-edit-page.component';
import { DashboardPageComponent } from './modules/user-account/pages/dashboard-page/dashboard-page.component';
import { RequestTrialPageComponent } from './modules/trial-requests/pages/request-trial-page/request-trial-page.component';
import { AllProductsPageComponent } from './modules/products/pages/all-products-page/all-products-page.component';
import { CompareProductsPageComponent } from './modules/products/pages/compare-products-page/compare-products-page.component';
import { ForgotPasswordPageComponent } from './modules/user-account/pages/forgot-password-page/forgot-password-page.component';
import { MaintenancePageComponent } from './modules/core-modules/pages/maintenance-page/maintenance-page.component';
import { SystemAnalysisPageComponent } from './modules/core-modules/pages/system-analysis-page/system-analysis-page.component';
import { LoggingPageComponent } from './modules/core-modules/pages/logging-page/logging-page.component';
import { SchedulerPageComponent } from './modules/core-modules/pages/scheduler-page/scheduler-page.component';
import { EmailLogsListPageComponent } from './modules/email-logs/pages/email-logs-list-page/email-logs-list-page.component';
import { PromotionsListPageComponent } from './modules/promotions/pages/promotions-list-page/promotions-list-page.component';
import { SetupScreenListPageComponent } from './modules/setup-screen/pages/setup-screen-list-page/setup-screen-list-page.component';
import { UnderMaintenancePageComponent } from './modules/home/pages/maintenance-page/under-maintenance-page.component';
import { ResetPasswordPageComponent } from './modules/user-account/pages/reset-password-page/reset-password-page.component';
import { VerifyUserComponent } from './modules/user-account/pages/verify-user/verify-user.component';
import { CartPageComponent } from './modules/products/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './modules/products/pages/checkout-page/checkout-page.component';
import { NotFoundPageComponent } from './modules/home/pages/not-found-page/not-found-page.component';
import { FreeTrialPageComponent } from './modules/home/pages/free-trial-page/free-trial-page.component';
import { SalesTransactionListPageComponent } from './modules/sales-transactions/pages/sales-transaction-list-page/sales-transaction-list-page.component';
import { AdminProductAddPageComponent } from './modules/products/pages/admin-product-add-page/admin-product-add-page.component';
import { AdminProductEditPageComponent } from './modules/products/pages/admin-product-edit-page/admin-product-edit-page.component';
import { AdminProductViewPageComponent } from './modules/products/pages/admin-product-view-page/admin-product-view-page.component';
import { AdminPromotionViewPageComponent } from './modules/promotions/pages/admin-promotion-view-page/admin-promotion-view-page.component';
import { AdminPromotionEditPageComponent } from './modules/promotions/pages/admin-promotion-edit-page/admin-promotion-edit-page.component';
import { AdminSetupScreenViewPageComponent } from './modules/setup-screen/pages/admin-setup-screen-view-page/admin-setup-screen-view-page.component';
import { AdminSetupScreenEditPageComponent } from './modules/setup-screen/pages/admin-setup-screen-edit-page/admin-setup-screen-edit-page.component';
import { AdminPromotionAddPageComponent } from './modules/promotions/pages/admin-promotion-add-page/admin-promotion-add-page.component';
import { CustomerViewPageComponent } from './modules/customers/pages/customer-view-page/customer-view-page.component';
import { CustomerEditPageComponent } from './modules/customers/pages/customer-edit-page/customer-edit-page.component';
import { EmailTemplatesViewPageComponent } from './modules/email-templates/pages/email-templates-view-page/email-templates-view-page.component';
import { EmailTemplatesEditPageComponent } from './modules/email-templates/pages/email-templates-edit-page/email-templates-edit-page.component';
import { UpdateProfilePageComponent } from './modules/customers/pages/update-profile-page/update-profile-page.component';
import { EmailLayoutViewPageComponent } from './modules/email-layouts/pages/email-layout-view-page/email-layout-view-page.component';
import { EmailLayoutEditPageComponent } from './modules/email-layouts/pages/email-layout-edit-page/email-layout-edit-page.component';
import { CountriesViewPageComponent } from './modules/countries/pages/countries-view-page/countries-view-page.component';
import { CountriesEditPageComponent } from './modules/countries/pages/countries-edit-page/countries-edit-page.component';
import { CookiePolicyPageComponent } from './modules/home/pages/cookie-policy-page/cookie-policy-page.component';
import { TermsOfUsePageComponent } from './modules/home/pages/terms-of-use-page/terms-of-use-page.component';
import { PrivacyPolicyPageComponent } from './modules/home/pages/privacy-policy-page/privacy-policy-page.component';
import { EndUserAgreementPageComponent } from './modules/home/pages/end-user-agreement-page/end-user-agreement-page.component';
import { BecomeAPartnerComponent } from './modules/home/pages/become-a-partner/become-a-partner.component';
import { CustomerLicenseListPageComponent } from './modules/license-management/pages/customer-license-list-page/customer-license-list-page.component';
import { LicenseDetailPageComponent } from './modules/license-management/pages/license-detail-page/license-detail-page.component';
import { ViewInvoiceComponent } from './modules/sales-transactions/pages/view-invoice/view-invoice.component';
import { LicenseServerDetailPageComponent } from './modules/license-management/pages/license-server-detail-page/license-server-detail-page.component';
import { AdminLicenseEditPageComponent } from './modules/license-management/pages/admin-license-edit-page/admin-license-edit-page.component';
import { LicenseServerEditPageComponent } from './modules/license-management/pages/license-server-edit-page/license-server-edit-page.component';
import { GatewaySuccessComponent } from './modules/products/components/gateway-success/gateway-success.component';
import { EmailLogsViewPageComponent } from './modules/email-logs/pages/email-logs-view-page/email-logs-view-page.component';

const routes: Routes = [
  {
  path: '',
    component: MainLayoutComponent,
  children: [
    {
      path: 'home',
      component: HomePageComponent
    },
    {
      path: 'login',
      component: LoginPageComponent
    },
    {
      path: 'register',
      component: RegisterPageComponent
    },
    {
      path: 'forgot-password',
      component: ForgotPasswordPageComponent
    },
    {
      path: 'trial-request',
      component: RequestTrialPageComponent
    },
    {
      path: 'about-us',
      component: AboutPageComponent
    },
    {
      path: 'products',
      component: AllProductsPageComponent
    },
    {
      path: 'compare-products',
      component: CompareProductsPageComponent
    },
    {
      path: 'cart',
      component: CartPageComponent
    },
    {
      path: 'page-404',
      component: NotFoundPageComponent
    },
    { path: '404', component: NotFoundPageComponent },
    {
      path: 'cookie-policy',
      component: CookiePolicyPageComponent
    },
    {
      path: 'terms-of-use',
      component: TermsOfUsePageComponent
    },
    {
      path: 'privacy-policy',
      component: PrivacyPolicyPageComponent
    },
    {
      path: 'user-agreement',
      component: EndUserAgreementPageComponent
    },
    {
      path: 'become-a-partner',
      component: BecomeAPartnerComponent
    },
    {
      path: 'free-trial/:productsku',
      component: FreeTrialPageComponent
    },
    {
      path: 'checkout',
      component: CheckoutPageComponent
    },
    {
      path: 'contact-us',
      component: ContactUsComponent
    },
    //{
    //  path: 'terms-conditions',
    //  component: TermsConditionsComponent
    //},
    {
      path: 'privacy-policy',
      component: PrivacyPolicyPageComponent
    },
    {
      path: 'user/sale-transactions',
      component: SalesTransactionListPageComponent
    },
    {
      //https://example.com/pay/confirm?redirect_flow_id=RE00038X4733Z8K21DBH8V9G73QRK3M7
      path: 'pay/confirm',
      component: GatewaySuccessComponent
    },
    {
      path: 'user/customers',
      component: CustomerListPageComponent
    },
    {
      path: 'user/customers/add',
      component: CustomerAddEditPageComponent
    },
    {
      path: 'user/customers/view/:customerRecID',
      component: CustomerViewPageComponent
    },
    {
      path: 'user/customers/edit/:customerRecID',
      component: CustomerEditPageComponent
    },
    {
      path: 'user/licenses/:customerRecID',
      component: CustomerLicenseListPageComponent
    },
    {
      path: 'user/license/view/:customerRecID/:licenseKey',
      component: LicenseDetailPageComponent
    },
    {
      path: 'user/license/view-servers/:customerRecID/:licenseKey',
      component: LicenseServerDetailPageComponent
    },
    {
      path: 'admin/license/edit-server/:customerRecID/:licenseServerRecId',
      component: LicenseServerEditPageComponent
    },
    {
      path: 'admin/license/edit/:customerRecID/:licenseKey',
      component: AdminLicenseEditPageComponent
    },
    {
      path: 'modules/database-maintenance',
      component: MaintenancePageComponent
    },
    {
      path: 'modules/performance-logging',
      component: LoggingPageComponent
    },
    {
      path: 'modules/system-analysis',
      component: SystemAnalysisPageComponent
    },
    {
      path: 'modules/schedular',
      component: SchedulerPageComponent
    },
    {
      path: 'product/:productsku',
      component: ProductDetailPageComponent
    },
    {
      path: 'reset-password/:verificationCode',
      component: ResetPasswordPageComponent
    },
    {
      path: 'verify-user/:verificationCode',
      component: VerifyUserComponent
    },
    {
      path: 'admin/promotions',
      component: PromotionsListPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/promotion/add',
      component: AdminPromotionAddPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/promotion/view/:promotionId',
      component: AdminPromotionViewPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/promotion/edit/:promotionId',
      component: AdminPromotionEditPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/setup-screens',
      component: SetupScreenListPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN',
      }
    },
    {
      path: 'admin/setup-screen/view',
      component: AdminSetupScreenViewPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/setup-screen/edit',
      component: AdminSetupScreenEditPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'request-trial',
      component: RequestTrialPageComponent
    },
    {
      path: 'admin/email-layouts',
      component: EmailLayoutsListPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/email-layouts/add-edit',
      component: EmailLayoutsAddEditPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/email-layouts/view/:layoutName',
      component: EmailLayoutViewPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/email-layouts/edit/:layoutName',
      component: EmailLayoutEditPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/email-templates',
      component: EmailTemplatesListPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/email-templates/add-edit',
      component: EmailTemplatesAddEditPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/email-templates/view/:templateName',
      component: EmailTemplatesViewPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/email-templates/edit/:templateName',
      component: EmailTemplatesEditPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/email-logs',
      component: EmailLogsListPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/email-logs/view/:templateName',
      component: EmailLogsViewPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/products',
      component: ProductsListPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/product/view/:productsku',
      component: AdminProductViewPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/product/edit/:productsku',
      component: AdminProductEditPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/product/add',
      component: AdminProductAddPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/countries/add',
      component: CountryAddEditPageComponent
    },
    {
      path: 'admin/countries/edit/:countryCode',
      component: CountriesEditPageComponent
    },
    {
      path: 'admin/countries/view/:countryCode',
      component: CountriesViewPageComponent
    },
    {
      path: 'admin/countries',
      component: CountriesListPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/products/add-edit',
      component: ProductAddEditPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'admin/dashboard',
      component: AdminDashboardPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      } 
    },
    {
      path: 'user/dashboard',
      component: DashboardPageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'USER'
      }
    },
    {
      path: 'user/update-profile',
      component: UpdateProfilePageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'USER'
      }
    },
    {
      path: 'admin/update-profile',
      component: UpdateProfilePageComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRole: 'ADMIN'
      }
    },
    {
      path: 'maintenance-page',
      component: UnderMaintenancePageComponent
    },

    {
      path: '',
      component: HomePageComponent
    },
    {
      path: 'referrer/:partnerRecId',
      component: HomePageComponent
    }
    ],
  },
  {
    path: 'user/sale-transactions/view/:invoiceId',
    component: ViewInvoiceComponent
  },

  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
