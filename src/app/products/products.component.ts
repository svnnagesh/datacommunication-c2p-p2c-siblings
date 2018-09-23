import { Component, OnInit, HostListener, Input, HostBinding } from '@angular/core';
import { ProductService } from './product.service';
import { Friends } from '../models/list.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  getContacts:Friends[];
  dataFromChild;
  name = 'Nagesh'

  constructor(private ps:ProductService) { }

  ngOnInit() {
    this.getContacts = this.ps.getContacts();    
  }

  fromChild(eventData:string) {
    this.dataFromChild = eventData;
  }

  /* @Input() defaultColor:string;
  @Input() highlightColor:string;

  @HostBinding('style.backgroundColor') backgroundColor:string;
  @HostBinding('style.color') color:string;

  @HostListener('mouseenter') mouseover(event:Event) {
    this.backgroundColor = this.defaultColor
  }

  @HostListener('mouseleave') mouseleave(event:Event) {
    this.backgroundColor = this.highlightColor;
  } */

  
  
  

}
