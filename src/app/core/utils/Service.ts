import {DispathEventT62} from './DispathEventT62';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './MessageService';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class Service {

  private headersJSON: HttpHeaders = new HttpHeaders({

    'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': 'Content-Type',
    //  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json',
    'type': 'POST',
    'dataType': 'json'
  });
  private headersXML: HttpHeaders = new HttpHeaders({

    'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': 'Content-Type',
    // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/text',
    'type': 'POST',
    'dataType': 'xml'
  });


  constructor(private  http: HttpClient, private messageService: MessageService) {
    DispathEventT62.registerComponent('SERVICE', this);
    console.log('Service');
  }


  public get(link: string, isShowSpinner = true): Observable<Object> {
    if (!link) {
      return;
    }
    if (isShowSpinner) {
      DispathEventT62.dispathEvent(this, 'SHOW_SPINNER');
    }
    return this.http.get(link).pipe(tap(data => DispathEventT62.dispathEvent(this, 'HIDE_SPINNER')),
      catchError(this.handleError(link, []))
    );

  }


  public post(data: any, link: string, contentType: string = 'json', isShowSpinner = true): Observable<Object> {
    if (!data || !link) {
      return;
    }
    if (typeof data !== 'string') {
      data = (data !== null) ? JSON.stringify(data) : null;
    }

    if (isShowSpinner) {
      DispathEventT62.dispathEvent(this, 'SHOW_SPINNER');
    }

    const headers = (contentType === 'json') ? this.headersJSON : this.headersXML;
    const responseType: any = (contentType === 'json') ? 'json' : 'text';


    return this.http.post(link, data, {
      headers: headers,
      responseType: responseType
    }).pipe( tap(data => {
        console.log(data);
        DispathEventT62.dispathEvent(this, 'HIDE_SPINNER');
      }),
      catchError(this.handleError(link)
      ));

  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error("govno!!!");
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      DispathEventT62.dispathEvent(this, 'HIDE_SPINNER');

      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
