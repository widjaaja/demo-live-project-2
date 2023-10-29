export class EmailTemplate {
  public id: string;
  public name: string;
  public content: string;
  public description: string;
  public subject: string;
  public fromAddress: string;
  public fromName: string;
  public enabled: string;
  public userID: string;
  public emailLayout: string;
}

export class EmailTemplatesList {
  public emailSettings: EmailTemplate;
}


