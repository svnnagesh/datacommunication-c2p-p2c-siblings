import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Friends } from '../models/list.model';
import { Routes, ActivatedRoute, ParamMap, Params } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  @Input() contact:Friends[];
  @Output() notify:EventEmitter<Friends[]> = new EventEmitter();

  toParent() {
    this.notify.emit(this.contact);
    //console.log(this.notify.emit(this.contact));
  }

  id:number;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      this.id = params['id'];
    })
    //console.log(this.id);
  }

  contacts(id) {
    console.log(id);
  }

}
