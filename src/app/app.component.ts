import { Component } from '@angular/core';
import {News} from './News';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app';
  news: News[];

    constructor(private newsService: NewsService) {
       this.newsService.getAll().subscribe(news => this.news = news);
    }

  key: string = 'headline';
  reverse: boolean = false;

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
