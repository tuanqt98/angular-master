import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  getMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=f5d854b3c9eb5a28e250bdd8034fce7e'
    );
  }
}
