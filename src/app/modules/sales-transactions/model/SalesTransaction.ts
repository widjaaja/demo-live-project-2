export class SaleTransaction {
  public customer: string;
  public partner: string;
  public currency: string;
  public referredByName: string;
  public entryNo: number;
  public customerNo: string;
  public partnerNo: string;
  public referredBy: string;
  public transactionDate: string;
  public invoiceNo: string;
  public productCode: string;
  public licenseId: string;
  public priceExVat: string;
  public discountAmount: string;
  public discount: string;
  public vatAmount: string;
  public totalSales: string;
  public transactionType: string;
  public onAccount: number;
  public createdBy: string;
  public promotionCode: string;
}

export class SaleTransactionList {
  public salesTransactions: SaleTransaction;
}

export class Invoice {
  public invoiceNo: string;
  public productCode: string;
  public priceExVat: number;
  public discountAmount: number;
  public vatAmount: number;
  public totalSales: number;
  public priceExVatString: number;
  public discountAmountString: number;
  public vatAmountString: number;
  public totalSalesString: number;
  public invoiceDate: string;
  public customerName: string;
  public address1: string;
  public address3: string;
  public address2: string;
  public address4: string;
  public postCode: string;
  public country: string;
  public currency: string;
  public productDescription: string;
  public clientName: string;
  public dueDate: string;
}

export class InvoiceDetail {
  public invoices: Invoice[];
  public totalExVat: string;
  public totalIncVat: string;
  public totalVAT: string;
}


