import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { requestProps } from './types/request';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  get apiListAllPokemons(): Observable<any> {
    return this.http.get<any>(this.baseUrl).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((item: any) => {
          this.getPokemon(item.url).subscribe((res) => (item.status = res));
        });
      })
    );
  }

  getPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((res) => res));
  }

  /**
   * Faz uma requisição do tipo GET
   * @param object Objeto contendo o sufixo da url a ser requisitada
   * @param object.path Sufixo da url a ser requisitada
   * @param object.cache Faz um cache da requisição de 5 minutos
   * @see {@link RequestProps}
   * @returns Retorna uma promise com a resposta da requisição
   */
  get<T>({ path }: Omit<requestProps, 'body'>) {
    return this.http.get<T>(`${this.baseUrl}/${path}`).pipe(
      tap((res) => res),
      tap((res) => console.log(res))
    );
  }
}
