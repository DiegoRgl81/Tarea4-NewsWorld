import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlines} from '../interfaces/interfaces'

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

getTopbusiness(){

  return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e811e12c7ce344a2b676031ffac9e6a0`);
}

}
