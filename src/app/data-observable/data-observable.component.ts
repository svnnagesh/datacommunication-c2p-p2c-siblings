import { Component, OnInit } from '@angular/core';
import { DataObservableService } from './data-observable.service';
import { Data } from '../models/list.model';

@Component({
  selector: 'app-data-observable',
  templateUrl: './data-observable.component.html',
  styleUrls: ['./data-observable.component.css']
})
export class DataObservableComponent implements OnInit {

  jsonData:Data[];
  errorMessage:string;

  constructor(private dataService:DataObservableService) { }

  ngOnInit() {
    this.dataObservable();
    this.dataPromise();    
  }

  dataObservable() {
    this.dataService.observableData().subscribe((success) => {
      this.jsonData = success;
      //console.log(success);
    }, (error) => {
      this.errorMessage = 'Problem with the server. Please try again later !!!'
    })
  }

  dataPromise() {
    this.dataService.promiseData().then(
      (success) => {
        console.log(success);
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }

}
