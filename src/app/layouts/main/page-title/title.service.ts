import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  public title = '';
  public action2 = '';
  public action1 = '';
  public action2Link = '';
  constructor() { }
}
