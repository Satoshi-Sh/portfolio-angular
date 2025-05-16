import { Component,OnInit } from '@angular/core';
import { DevtoApiService } from '../devto-api.service';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  blogs: any[] = [];
  constructor(private devtoApi: DevtoApiService){}

  ngOnInit(): void {
    this.devtoApi.getBlog().subscribe({
      next: data => this.blogs = data,
      error: err => console.error('Error fetching post:', err),
    })
  }

}
