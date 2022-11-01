import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse, Value } from '../posts/interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private serviceUrl: string = 'http://localhost:7071/api/GetPosts';

  private _results: Value[] = [];
  constructor(private http: HttpClient) {}

  cargar() {
    this.http
      .get<APIResponse>(`${this.serviceUrl}/Daniel Dev`)
      .subscribe((resp) => {
        this._results = resp.value;
        console.log(resp.value);
      });
  }

  get results() {
    return [...this._results];
  }

  crear() {}
}
