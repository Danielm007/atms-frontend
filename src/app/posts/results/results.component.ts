import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  ngOnInit(): void {
    this.postService.cargar();
  }
  constructor(private postService: PostsService) {}
  get results() {
    return this.postService.results;
  }
}
