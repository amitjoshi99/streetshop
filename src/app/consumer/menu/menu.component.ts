import { Component, OnInit } from '@angular/core';
import { ShopkeeperDetail } from '../../models/ShopkeeperDetail';
import { productList } from '../../models/productList';
import { productList1 } from '../../models/productList';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    shopkeeperDetail;
    productlist;
    productlist1;

  constructor() {console }

    ngOnInit() {
        this.shopkeeperDetail = ShopkeeperDetail;
        this.productlist = productList;
        this.productlist1 = productList1;
        console.log("list",this.productlist1);
        console.log("item", this.productlist1[0].length);
  }

}
