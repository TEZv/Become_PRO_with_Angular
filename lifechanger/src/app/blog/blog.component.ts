import { Component, OnInit } from '@angular/core';
import { BlogCardsInfo } from '../models/blog-card';
import { BlogCardsService } from '../services/blog-card.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  blogCardInfos: BlogCardsInfo[] = [];

  constructor(private blogCardsService: BlogCardsService) { }

  ngOnInit(): void {
    this.blogCardInfos = this.blogCardsService.GetBlogCardsInfos();
  }
}
