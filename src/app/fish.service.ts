import { Injectable } from '@angular/core';
import { Fish } from './fish';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FishService {

  constructor(
    private http: HttpClient) { }

  private fishesUrl = 'api/fishes';

  getFishes (): Observable<Fish[]> {
  return this.http.get<Fish[]>(this.fishesUrl)
    .pipe(
      catchError(this.handleError('getFishes', []))
    );
  }

  getFishNo404<Data>(id: number): Observable<Fish> {
    const url = `${this.fishesUrl}/?id=${id}`;
    return this.http.get<Fish[]>(url)
      .pipe(
        map(Fishes => Fishes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
        }),
        catchError(this.handleError<Fish>(`getFish id=${id}`))
      );
  }

  getFish(id: number): Observable<Fish> {
    const url = `${this.fishesUrl}/${id}`;
    return this.http.get<Fish>(url).pipe(
      catchError(this.handleError<Fish>(`getFish id=${id}`))
    );
  }

  updateFish (fish: Fish): Observable<any> {
    return this.http.put(this.fishesUrl, fish, httpOptions).pipe(
      catchError(this.handleError<any>('updateFish'))
    );
  }

  addFish (fish: Fish): Observable<Fish> {
    return this.http.post<Fish>(this.fishesUrl, fish, httpOptions).pipe(
      catchError(this.handleError<Fish>('addFish'))
    );
  }

  deleteFish (fish: Fish | number): Observable<Fish> {
    const id = typeof fish === 'number' ? fish : fish.id;
    const url = `${this.fishesUrl}/${id}`;

    return this.http.delete<Fish>(url, httpOptions).pipe(
      catchError(this.handleError<Fish>('deleteFish'))
    );
  }
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        return of(result as T);
      };
    }
}
