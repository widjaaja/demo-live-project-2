import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta: Meta, private title: Title) { }

  setTitle(title: string) {
    this.title.setTitle(title);
  }

  updateMeta(name: string, content: string) {
    this.meta.updateTag(
      { name: name, content: content },
    );
  }
}
