import { Component } from '@angular/core';

type Blog = {
  title: string;
  blog: string;
  content: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Interface';
  blog: Blog = {
    title: '',
    blog: '',
    content: '',
  };

  agregar() {
    console.log(this.blog);
  }
}
