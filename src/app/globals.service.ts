import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor() { }

  public readonly contact = $localize`:@@contact:Contact`;
  public readonly successMsg = $localize`:@@successMsg:Order created successfully`;

  public readonly keywords: 'keywords';
  public readonly description: 'description';

  //home page Meta informations
  public readonly homepageTitle = 'SQL Mantra Tools - For All Business';
  public readonly homepageMetaDescription = 'Get the most out of your SQL Server by tuning it with SQLMantraTools. Optimize, maintain any application for better performance. Increase scalability today!';
  public readonly homepageMetaKeyword = 'performance analysis tool for Microsoft SQL Server,performance Troubleshooting,tool to improving performance of SQL Server,SQL,SQL Performance Tool,Software tool for performance tuning,tool for application tuning,Scheduler for SQL Server Express,SQL Health Check Report,24/7 SQL Server Monitoring,Microsoft Dynamics 365 Business Central performance tuning,Dynamics NAV performance tuning,Dynamics AX performance monitoring,Dynamics NAV 24/7 Performance Logging,24/7 Performance Logging for Navision,SQLMantraTools.com,improving the scalability of application';

  //Contact us Page
  public readonly contactUsPageTitle = 'Contact us | SQL Mantra Tools';
  public readonly contactUsPageMetaDescription = 'Get the most out of your SQL Server by tuning it with SQLMantraTools.Optimize, maintain any application for better performance.Increase scalability today!';
  public readonly contactUsPageMetaKeyword = 'performance analysis tool for Microsoft SQL Server,performance Troubleshooting,tool to improving performance of SQL Server,SQL,SQL Performance Tool,Software tool for performance tuning,tool for application tuning,Scheduler for SQL Server Express,SQL Health Check Report,24/7 SQL Server Monitoring,Microsoft Dynamics 365 Business Central performance tuning,Dynamics NAV performance tuning,Dynamics AX performance monitoring,Dynamics NAV 24/7 Performance Logging,24/7 Performance Logging for Navision,SQLMantraTools.com,improving the scalability of application';

  //Login Page
  public readonly loginPageTitle = 'Login | SQL Mantra Tools';
  public readonly loginPageMetaDescription = 'Get the most out of your SQL Server by tuning it with SQLMantraTools.Optimize, maintain any application for better performance.Increase scalability today!';
  public readonly loginPageMetaKeyword = 'performance analysis tool for Microsoft SQL Server,performance Troubleshooting,tool to improving performance of SQL Server,SQL,SQL Performance Tool,Software tool for performance tuning,tool for application tuning,Scheduler for SQL Server Express,SQL Health Check Report,24/7 SQL Server Monitoring,Microsoft Dynamics 365 Business Central performance tuning,Dynamics NAV performance tuning,Dynamics AX performance monitoring,Dynamics NAV 24/7 Performance Logging,24/7 Performance Logging for Navision,SQLMantraTools.com,improving the scalability of application';

  //Forgot Page
  public readonly forgotPwdPageTitle = 'Forgot-Password | SQL Mantra Tools';
  public readonly forgotPwdPageMetaDescription = 'Get the most out of your SQL Server by tuning it with SQLMantraTools.Optimize, maintain any application for better performance.Increase scalability today!';
  public readonly forgotPwdPageMetaKeyword = 'performance analysis tool for Microsoft SQL Server,performance Troubleshooting,tool to improving performance of SQL Server,SQL,SQL Performance Tool,Software tool for performance tuning,tool for application tuning,Scheduler for SQL Server Express,SQL Health Check Report,24/7 SQL Server Monitoring,Microsoft Dynamics 365 Business Central performance tuning,Dynamics NAV performance tuning,Dynamics AX performance monitoring,Dynamics NAV 24/7 Performance Logging,24/7 Performance Logging for Navision,SQLMantraTools.com,improving the scalability of application';

  //Reset Password Page
  public readonly resetPwdPageTitle = 'Reset-Password | SQL Mantra Tools';
  public readonly resetPwdPageMetaDescription = 'Get the most out of your SQL Server by tuning it with SQLMantraTools.Optimize, maintain any application for better performance.Increase scalability today!';
  public readonly resetPwdPageMetaKeyword = 'performance analysis tool for Microsoft SQL Server,performance Troubleshooting,tool to improving performance of SQL Server,SQL,SQL Performance Tool,Software tool for performance tuning,tool for application tuning,Scheduler for SQL Server Express,SQL Health Check Report,24/7 SQL Server Monitoring,Microsoft Dynamics 365 Business Central performance tuning,Dynamics NAV performance tuning,Dynamics AX performance monitoring,Dynamics NAV 24/7 Performance Logging,24/7 Performance Logging for Navision,SQLMantraTools.com,improving the scalability of application';



  //Register Page
  public readonly registerPageTitle = 'Register | SQL Mantra Tools';
  public readonly registerPageMetaDescription = 'Get the most out of your SQL Server by tuning it with SQLMantraTools.Optimize, maintain any application for better performance.Increase scalability today!';
  public readonly registerPageMetaKeyword = 'performance analysis tool for Microsoft SQL Server,performance Troubleshooting,tool to improving performance of SQL Server,SQL,SQL Performance Tool,Software tool for performance tuning,tool for application tuning,Scheduler for SQL Server Express,SQL Health Check Report,24/7 SQL Server Monitoring,Microsoft Dynamics 365 Business Central performance tuning,Dynamics NAV performance tuning,Dynamics AX performance monitoring,Dynamics NAV 24/7 Performance Logging,24/7 Performance Logging for Navision,SQLMantraTools.com,improving the scalability of application';


  //About us Page
  public readonly aboutUsPageTitle = 'About us | SQL Mantra Tools';
  public readonly aboutUsPageMetaDescription = 'Get the most out of your SQL Server by tuning it with SQLMantraTools.Optimize, maintain any application for better performance.Increase scalability today!';
  public readonly aboutUsPageMetaKeyword = 'performance analysis tool for Microsoft SQL Server,performance Troubleshooting,tool to improving performance of SQL Server,SQL,SQL Performance Tool,Software tool for performance tuning,tool for application tuning,Scheduler for SQL Server Express,SQL Health Check Report,24/7 SQL Server Monitoring,Microsoft Dynamics 365 Business Central performance tuning,Dynamics NAV performance tuning,Dynamics AX performance monitoring,Dynamics NAV 24/7 Performance Logging,24/7 Performance Logging for Navision,SQLMantraTools.com,improving the scalability of application';

  //All Products Page
  public readonly productsPageTitle = 'Products | SQL Mantra Tools';
  public readonly productsPageMetaDescription = 'Get the most out of your SQL Server by tuning it with SQLMantraTools.Optimize, maintain any application for better performance.Increase scalability today!';
  public readonly productsPageMetaKeyword = 'performance analysis tool for Microsoft SQL Server,performance Troubleshooting,tool to improving performance of SQL Server,SQL,SQL Performance Tool,Software tool for performance tuning,tool for application tuning,Scheduler for SQL Server Express,SQL Health Check Report,24/7 SQL Server Monitoring,Microsoft Dynamics 365 Business Central performance tuning,Dynamics NAV performance tuning,Dynamics AX performance monitoring,Dynamics NAV 24/7 Performance Logging,24/7 Performance Logging for Navision,SQLMantraTools.com,improving the scalability of application';

  //Privacy Policy Page
  public readonly privacyPageTitle = 'Privacy-Policy | SQL Mantra Tools';
  public readonly privacyPageMetaDescription = 'Get the most out of your SQL Server by tuning it with SQLMantraTools.Optimize, maintain any application for better performance.Increase scalability today!';
  public readonly privacyPageMetaKeyword = 'performance analysis tool for Microsoft SQL Server,performance Troubleshooting,tool to improving performance of SQL Server,SQL,SQL Performance Tool,Software tool for performance tuning,tool for application tuning,Scheduler for SQL Server Express,SQL Health Check Report,24/7 SQL Server Monitoring,Microsoft Dynamics 365 Business Central performance tuning,Dynamics NAV performance tuning,Dynamics AX performance monitoring,Dynamics NAV 24/7 Performance Logging,24/7 Performance Logging for Navision,SQLMantraTools.com,improving the scalability of application';

  //Terms and Conditions Page
  public readonly termsPageTitle = 'Terms-Conditions | SQL Mantra Tools';
  public readonly termsPageMetaDescription = 'Get the most out of your SQL Server by tuning it with SQLMantraTools.Optimize, maintain any application for better performance.Increase scalability today!';
  public readonly termsPageMetaKeyword = 'performance analysis tool for Microsoft SQL Server,performance Troubleshooting,tool to improving performance of SQL Server,SQL,SQL Performance Tool,Software tool for performance tuning,tool for application tuning,Scheduler for SQL Server Express,SQL Health Check Report,24/7 SQL Server Monitoring,Microsoft Dynamics 365 Business Central performance tuning,Dynamics NAV performance tuning,Dynamics AX performance monitoring,Dynamics NAV 24/7 Performance Logging,24/7 Performance Logging for Navision,SQLMantraTools.com,improving the scalability of application';


}
