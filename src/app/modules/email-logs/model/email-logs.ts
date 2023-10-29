export class EmailLogs {
  public id: string;
  public fromAddress: string;
  public toAddress: string;
  public type: string;
  public subject: string;
  public contentPlainText: number;
  public contentHtml: string;
  public apiProviderId: number;
  public apiProviderMessageId: number;
  public apiProviderMessageStatus: number;
  public apiProviderMessageRejectReason: string;
  //public isProcessed: number;
  public created: string;
  //public modified: string;

  //      public byte ? IsProcessed { get; set; }
  //      public DateTime ? Created { get; set; }
  //      public DateTime ? Modified { get; set; }
}


export class EmailLogsList {
  public transactionMessages: EmailLogs;
}


