import {DispathEventT62} from './DispathEventT62';
import {catchError, tap} from 'rxjs/operators';
import {error} from 'util';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './MessageService';
import {Observable, of} from 'rxjs';


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


  public get(link: string, callBack: Function, isShowSpinner = true) {
    if (!link || !callBack) {
      return;
    }
    if (isShowSpinner) {
      DispathEventT62.dispathEvent(this, 'HIDE_SPINNER');
    }
    return this.http.get(link).pipe(tap(data => DispathEventT62.dispathEvent(this, 'HIDE_SPINNER')),
      catchError(this.handleError(link, []))
    );

  }


  public post(data: any, link: string, callBack: Function, contentType: string = 'json', isShowSpinner = true) {
    if (!data || !link || !callBack) {
      return;
    }
    if (typeof data !== 'string') {
      data = (data !== null) ? JSON.stringify(data) : null;
    }

    console.info('link request ->' + link);
    console.info('mess request ->' + data);

    if (isShowSpinner) {
      DispathEventT62.dispathEvent(this, 'HIDE_SPINNER');
    }

    const headers = (contentType === 'json') ? this.headersJSON : this.headersXML;
    const responseType: any = (contentType === 'json') ? 'json' : 'text';


    return this.http.post(link, data, {
      headers: headers,
      responseType: responseType
    }).pipe(tap((data: any) => DispathEventT62.dispathEvent(this, 'HIDE_SPINNER')),
      catchError(this.handleError(link, []))
    );

  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

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