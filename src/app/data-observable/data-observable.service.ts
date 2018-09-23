import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Data } from '../models/list.model';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class DataObservableService {

  constructor(private http:Http) { }

  observableData():Observable<Data[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
                  .map((res:Response) => <Data[]>res.json())
                  .catch(this.handleError)
  }

  handleError(error:Response) {
    console.error(error);
    return Observable.throw(error);
  }

 
  promiseData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
                  .map((res:Response) => res.json())
                  .toPromise()
                  .catch(this.handlePromiseError)
  }

  handlePromiseError(error:Response) {
    console.error(error);
    throw(error);
  }

}
