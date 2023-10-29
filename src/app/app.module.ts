import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { CommonModule } from '@angular/common';  
import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorService } from './shared/services/ErrorHandling/error.service';
import { HttpinterceptorService } from './shared/services/ErrorHandling/httpinterceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { HeaderComponent } from './layouts/main/header/header.component';
import { FooterComponent } from './layouts/main/footer/footer.component';
import { MainLayoutComponent } from './layouts/main/main-layout/main-layout.component';
import { HeaderMainComponent } from './layouts/main/header-main/header-main.component';
import { LoginPageComponent } from './modules/user-account/pages/login-page/login-page.component';
import { RegisterPageComponent } from './modules/user-account/pages/register-page/register-page.component';
import { RegisterComponent } from './modules/user-account/components/register/register.component';
import { FeaturedProductsComponent } from './modules/home/components/featured-products/featured-products.component';
import { BlogPostsComponent } from './modules/home/components/blog-posts/blog-posts.component';
import { WhatWeDoComponent } from './modules/home/components/what-we-do/what-we-do.component';
import { SliderComponent } from './modules/home/components/slider/slider.component';
import { ProductsListPageComponent } from './modules/products/pages/products-list-page/products-list-page.component';
import { ProductAddEditPageComponent } from './modules/products/pages/product-add-edit-page/product-add-edit-page.component';
import { ProductListComponent } from './modules/products/components/product-list/product-list.component';
import { ProductAddEditComponent } from './modules/products/components/product-add-edit/product-add-edit.component';
import { EmailLayoutsListPageComponent } from './modules/email-layouts/pages/email-layouts-list-page/email-layouts-list-page.component';
import { EmailLayoutsAddEditPageComponent } from './modules/email-layouts/pages/email-layouts-add-edit-page/email-layouts-add-edit-page.component';
import { EmailLayoutsListComponent } from './modules/email-layouts/components/email-layouts-list/email-layouts-list.component';
import { EmailLayoutsAddEditComponent } from './modules/email-layouts/components/email-layouts-add-edit/email-layouts-add-edit.component';
import { EmailTemplatesListPageComponent } from './modules/email-templates/pages/email-templates-list-page/email-templates-list-page.component';
import { EmailTemplatesAddEditPageComponent } from './modules/email-templates/pages/email-templates-add-edit-page/email-templates-add-edit-page.component';
import { EmailTemplatesAddEditComponent } from './modules/email-templates/components/email-templates-add-edit/email-templates-add-edit.component';
import { EmailTemplatesListComponent } from './modules/email-templates/components/email-templates-list/email-templates-list.component';
import { DashboardPageComponent } from './modules/user-account/pages/dashboard-page/dashboard-page.component';
import { AdminDashboardPageComponent } from './modules/user-account/pages/admin-dashboard-page/admin-dashboard-page.component';
import { PageLayoutComponent } from './layouts/main/page-layout/page-layout.component';
import { PageTitleComponent } from './layouts/main/page-title/page-title.component';
import { ProductDetailPageComponent } from './modules/products/pages/product-detail-page/product-detail-page.component';
import { CustomerListPageComponent } from './modules/customers/pages/customer-list-page/customer-list-page.component';
import { CustomerAddEditPageComponent } from './modules/customers/pages/customer-add-edit-page/customer-add-edit-page.component';
import { CustomerListComponent } from './modules/customers/components/customer-list/customer-list.component';
import { CustomerAddEditComponent } from './modules/customers/components/customer-add-edit/customer-add-edit.component';
import { RequestTrialPageComponent } from './modules/trial-requests/pages/request-trial-page/request-trial-page.component';
import { RequestTrialListPageComponent } from './modules/trial-requests/pages/request-trial-list-page/request-trial-list-page.component';
import { RequestTrialViewPageComponent } from './modules/trial-requests/pages/request-trial-view-page/request-trial-view-page.component';
import { RequestTrialComponent } from './modules/trial-requests/components/request-trial/request-trial.component';
import { RequestTrialViewComponent } from './modules/trial-requests/components/request-trial-view/request-trial-view.component';
import { RequestTrialListComponent } from './modules/trial-requests/components/request-trial-list/request-trial-list.component';
import { ForgotPasswordPageComponent } from './modules/user-account/pages/forgot-password-page/forgot-password-page.component';
import { AllProductsPageComponent } from './modules/products/pages/all-products-page/all-products-page.component';
import { AllProductsComponent } from './modules/products/components/all-products/all-products.component';
import { AlertComponent } from './shared/controls/alert/alert.component';
import { ResetPasswordPageComponent } from './modules/user-account/pages/reset-password-page/reset-password-page.component';
import { CountriesListPageComponent } from './modules/countries/pages/countries-list-page/countries-list-page.component';
import { CountryListComponent } from './modules/countries/components/country-list/country-list.component';
import { MaintenancePageComponent } from './modules/core-modules/pages/maintenance-page/maintenance-page.component';
import { LoggingPageComponent } from './modules/core-modules/pages/logging-page/logging-page.component';
import { SchedulerPageComponent } from './modules/core-modules/pages/scheduler-page/scheduler-page.component';
import { SystemAnalysisPageComponent } from './modules/core-modules/pages/system-analysis-page/system-analysis-page.component';
import { PromotionsListPageComponent } from './modules/promotions/pages/promotions-list-page/promotions-list-page.component';
import { SetupScreenListPageComponent } from './modules/setup-screen/pages/setup-screen-list-page/setup-screen-list-page.component';
import { PromotionsListComponent } from './modules/promotions/components/promotions-list/promotions-list.component';
import { SetupScreenListComponent } from './modules/setup-screen/components/setup-screen-list/setup-screen-list.component';
import { EmailLogsListComponent } from './modules/email-logs/components/email-logs-list/email-logs-list.component';
import { EmailLogsListPageComponent } from './modules/email-logs/pages/email-logs-list-page/email-logs-list-page.component';
import { ContactUsComponent } from './modules/home/pages/contact-us/contact-us.component';
import { UnderMaintenancePageComponent } from './modules/home/pages/maintenance-page/under-maintenance-page.component';
import { CompareProductsPageComponent } from './modules/products/pages/compare-products-page/compare-products-page.component';
import { CompareProductsComponent } from './modules/products/components/compare-products/compare-products.component';
import { CountryAddEditComponent } from './modules/countries/components/country-add-edit/country-add-edit.component';
import { CountryAddEditPageComponent } from './modules/countries/pages/country-add-edit-page/country-add-edit-page.component';
import { VerifyUserComponent } from './modules/user-account/pages/verify-user/verify-user.component';
import { CartPageComponent } from './modules/products/pages/cart-page/cart-page.component';
import { CartComponent } from './modules/products/components/cart/cart.component';
import { CheckoutPageComponent } from './modules/products/pages/checkout-page/checkout-page.component';
import { CheckoutComponent } from './modules/products/components/checkout/checkout.component';
import { FreeTrialPageComponent } from './modules/home/pages/free-trial-page/free-trial-page.component';

import { SalesTransactionListPageComponent } from './modules/sales-transactions/pages/sales-transaction-list-page/sales-transaction-list-page.component';
import { SalesTransactionViewPageComponent } from './modules/sales-transactions/pages/sales-transaction-view-page/sales-transaction-view-page.component';
import { SalesTransactionComponent } from './modules/sales-transactions/components/sales-transaction/sales-transaction.component';
import { SalesTransactionViewComponent } from './modules/sales-transactions/components/sales-transaction-view/sales-transaction-view.component';
import { AdminProductViewPageComponent } from './modules/products/pages/admin-product-view-page/admin-product-view-page.component';
import { AdminProductAddPageComponent } from './modules/products/pages/admin-product-add-page/admin-product-add-page.component';
import { AdminProductEditPageComponent } from './modules/products/pages/admin-product-edit-page/admin-product-edit-page.component';
import { AdminProductEditComponent } from './modules/products/components/admin-product-edit/admin-product-edit.component';
import { AdminProductAddComponent } from './modules/products/components/admin-product-add/admin-product-add.component';
import { AdminProductViewComponent } from './modules/products/components/admin-product-view/admin-product-view.component';
import { AdminPromotionAddPageComponent } from './modules/promotions/pages/admin-promotion-add-page/admin-promotion-add-page.component';
import { AdminPromotionViewPageComponent } from './modules/promotions/pages/admin-promotion-view-page/admin-promotion-view-page.component';
import { AdminPromotionEditPageComponent } from './modules/promotions/pages/admin-promotion-edit-page/admin-promotion-edit-page.component';
import { AdminPromotionAddComponent } from './modules/promotions/components/admin-promotion-add/admin-promotion-add.component';
import { AdminPromotionEditComponent } from './modules/promotions/components/admin-promotion-edit/admin-promotion-edit.component';
import { AdminPromotionViewComponent } from './modules/promotions/components/admin-promotion-view/admin-promotion-view.component';
import { AdminSetupScreenEditPageComponent } from './modules/setup-screen/pages/admin-setup-screen-edit-page/admin-setup-screen-edit-page.component';
import { AdminSetupScreenViewPageComponent } from './modules/setup-screen/pages/admin-setup-screen-view-page/admin-setup-screen-view-page.component';
import { AdminSetupScreenViewComponent } from './modules/setup-screen/components/admin-setup-screen-view/admin-setup-screen-view.component';
import { AdminSetupScreenEditComponent } from './modules/setup-screen/components/admin-setup-screen-edit/admin-setup-screen-edit.component';
import { CustomerViewPageComponent } from './modules/customers/pages/customer-view-page/customer-view-page.component';
import { CustomerEditPageComponent } from './modules/customers/pages/customer-edit-page/customer-edit-page.component';
import { CustomerViewComponent } from './modules/customers/components/customer-view/customer-view.component';
import { CustomerEditComponent } from './modules/customers/components/customer-edit/customer-edit.component';
import { CountriesViewPageComponent } from './modules/countries/pages/countries-view-page/countries-view-page.component';
import { CountriesEditPageComponent } from './modules/countries/pages/countries-edit-page/countries-edit-page.component';
import { CountriesViewComponent } from './modules/countries/components/countries-view/countries-view.component';
import { CountriesEditComponent } from './modules/countries/components/countries-edit/countries-edit.component';
import { EmailLayoutViewPageComponent } from './modules/email-layouts/pages/email-layout-view-page/email-layout-view-page.component';
import { EmailLayoutEditPageComponent } from './modules/email-layouts/pages/email-layout-edit-page/email-layout-edit-page.component';
import { EmailLayoutViewComponent } from './modules/email-layouts/components/email-layout-view/email-layout-view.component';
import { EmailLayoutEditComponent } from './modules/email-layouts/components/email-layout-edit/email-layout-edit.component';
import { EmailLogsViewPageComponent } from './modules/email-logs/pages/email-logs-view-page/email-logs-view-page.component';
import { EmailLogsViewComponent } from './modules/email-logs/components/email-logs-view/email-logs-view.component';
import { EmailTemplatesViewPageComponent } from './modules/email-templates/pages/email-templates-view-page/email-templates-view-page.component';
import { EmailTemplatesEditPageComponent } from './modules/email-templates/pages/email-templates-edit-page/email-templates-edit-page.component';
import { EmailTemplatesViewComponent } from './modules/email-templates/components/email-templates-view/email-templates-view.component';
import { EmailTemplatesEditComponent } from './modules/email-templates/components/email-templates-edit/email-templates-edit.component';
import { UpdateProfilePageComponent } from './modules/customers/pages/update-profile-page/update-profile-page.component';
import { UpdateProfileComponent } from './modules/customers/components/update-profile/update-profile.component';
import { ActionLogsListComponent } from './modules/action-logs/components/action-logs-list/action-logs-list.component';
import { ActionLogsListPageComponent } from './modules/action-logs/pages/action-logs-list-page/action-logs-list-page.component';
import { CustomerLicenseListPageComponent } from './modules/license-management/pages/customer-license-list-page/customer-license-list-page.component';
import { LicenseDetailPageComponent } from './modules/license-management/pages/license-detail-page/license-detail-page.component';
import { AdminLicenseEditPageComponent } from './modules/license-management/pages/admin-license-edit-page/admin-license-edit-page.component';
import { CustomerLicenseListComponent } from './modules/license-management/components/customer-license-list/customer-license-list.component';
import { LicenseDetailComponent } from './modules/license-management/components/license-detail/license-detail.component';
import { AdminLicenseEditComponent } from './modules/license-management/components/admin-license-edit/admin-license-edit.component';
import { InvoicePdfComponent } from './modules/sales-transactions/components/invoice-pdf/invoice-pdf.component';
import { ViewInvoiceComponent } from './modules/sales-transactions/pages/view-invoice/view-invoice.component';
import { LicenseServerDetailPageComponent } from './modules/license-management/pages/license-server-detail-page/license-server-detail-page.component';
import { LicenseServerDetailComponent } from './modules/license-management/components/license-server-detail/license-server-detail.component';
import { LicenseServerEditPageComponent } from './modules/license-management/pages/license-server-edit-page/license-server-edit-page.component';
import { LicenseServerEditComponent } from './modules/license-management/components/license-server-edit/license-server-edit.component';
import { GatewaySuccessComponent } from './modules/products/components/gateway-success/gateway-success.component';


import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; 
// import { MomentModule } from 'angular2-moment'; // optional, provides moment-style pipes for date formatting
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    HeaderMainComponent,
    LoginPageComponent,
    RegisterPageComponent,
    RegisterComponent,
    FeaturedProductsComponent,
    BlogPostsComponent,
    WhatWeDoComponent,
    SliderComponent,
    ProductsListPageComponent,
    ProductAddEditPageComponent,
    ProductListComponent,
    ProductAddEditComponent,
    EmailLayoutsListPageComponent,
    EmailLayoutsAddEditPageComponent,
    EmailLayoutsListComponent,
    EmailLayoutsAddEditComponent,
    EmailTemplatesListPageComponent,
    EmailTemplatesAddEditPageComponent,
    EmailTemplatesAddEditComponent,
    EmailTemplatesListComponent,
    DashboardPageComponent,
    AdminDashboardPageComponent,
    PageLayoutComponent,
    PageTitleComponent,
    ProductDetailPageComponent,
    CustomerListPageComponent,
    CustomerAddEditPageComponent,
    CustomerListComponent,
    CustomerAddEditComponent,
    RequestTrialPageComponent,
    RequestTrialListPageComponent,
    RequestTrialViewPageComponent,
    RequestTrialComponent,
    RequestTrialViewComponent,
    RequestTrialListComponent,
    ForgotPasswordPageComponent,
    AllProductsPageComponent,
    AllProductsComponent,
    AlertComponent,
    ResetPasswordPageComponent,
    CountriesListPageComponent,
    CountryListComponent,
    MaintenancePageComponent,
    LoggingPageComponent,
    SchedulerPageComponent,
    SystemAnalysisPageComponent,
    PromotionsListPageComponent,
    SetupScreenListPageComponent,
    PromotionsListComponent,
    SetupScreenListComponent,
    EmailLogsListComponent,
    EmailLogsListPageComponent,
    ContactUsComponent,
    UnderMaintenancePageComponent,
    CompareProductsPageComponent,
    CompareProductsComponent,
    CountryAddEditComponent,
    CountryAddEditPageComponent,
    VerifyUserComponent,
    CartPageComponent,
    CartComponent,
    CheckoutPageComponent,
    CheckoutComponent,
    FreeTrialPageComponent,
    SalesTransactionListPageComponent,
    SalesTransactionViewPageComponent,
    SalesTransactionComponent,
    SalesTransactionViewComponent,
    AdminProductViewPageComponent,
    AdminProductAddPageComponent,
    AdminProductEditPageComponent,
    AdminProductEditComponent,
    AdminProductAddComponent,
    AdminProductViewComponent,
    AdminPromotionAddPageComponent,
    AdminPromotionViewPageComponent,
    AdminPromotionEditPageComponent,
    AdminPromotionAddComponent,
    AdminPromotionEditComponent,
    AdminPromotionViewComponent,
    AdminSetupScreenEditPageComponent,
    AdminSetupScreenViewPageComponent,
    AdminSetupScreenViewComponent,
    AdminSetupScreenEditComponent,
    CustomerViewPageComponent,
    CustomerEditPageComponent,
    CustomerViewComponent,
    CustomerEditComponent,
    CountriesViewPageComponent,
    CountriesEditPageComponent,
    CountriesViewComponent,
    CountriesEditComponent,
    EmailLayoutViewPageComponent,
    EmailLayoutEditPageComponent,
    EmailLayoutViewComponent,
    EmailLayoutEditComponent,
    EmailLogsViewPageComponent,
    EmailLogsViewComponent,
    EmailTemplatesViewPageComponent,
    EmailTemplatesEditPageComponent,
    EmailTemplatesViewComponent,
    EmailTemplatesEditComponent,
    UpdateProfilePageComponent,
    UpdateProfileComponent,
    ActionLogsListComponent,
    ActionLogsListPageComponent,
    CustomerLicenseListPageComponent,
    LicenseDetailPageComponent,
    AdminLicenseEditPageComponent,
    CustomerLicenseListComponent,
    LicenseDetailComponent,
    AdminLicenseEditComponent,
    InvoicePdfComponent,
    ViewInvoiceComponent,
    LicenseServerDetailPageComponent,
    LicenseServerDetailComponent,
    LicenseServerEditPageComponent,
    LicenseServerEditComponent,
    GatewaySuccessComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    CKEditorModule,
    NgIdleKeepaliveModule.forRoot(),
    // MomentModule,
    ModalModule.forRoot(),

    QuillModule.forRoot()
  ],
  providers: [
    Meta,
    Title,
  {
      provide: ErrorHandler,
      useClass: ErrorService,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
