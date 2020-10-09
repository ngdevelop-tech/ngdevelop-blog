---
title: Dynamically Add Title and Meta Tags on Route Change in Angular
description: 'In this article, we will see Dynamically add Title and Meta Tags on Route Change in Angular Application for Search Engine Optimization'
published: true
---

# Dynamically Add Title and Meta Tags on Route Change in Angular

Web Page title, description, and other meta tags are very important for the Search Engine Optimization of any web application. 

> Meta tags provide information about the webpage. These tags are not visible to user but this information is used by web crawlers.

Search Engines like google and bing use web crawlers to index web pages.

Social Media Platforms like Facebook, Twitter, and LinkedIn web crawlers crawl the web page to show the card when we share the page link. 

In the traditional web applications, we can add meta tags on each page, However in a single page application (SPA), we have only one page where other routes are dynamically rendered.

## Code

```typescript
    import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private meta: Meta) { }

  updateTitle(title: string){
    this.title.setTitle(title);
  }

  updateMetaTags(metaTags: MetaDefinition[]){
    metaTags.forEach(m=> this.meta.updateTag(m));
  }
}
```