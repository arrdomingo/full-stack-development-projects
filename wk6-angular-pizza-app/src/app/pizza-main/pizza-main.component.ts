import { Component, OnInit } from '@angular/core';
import { ProductMain } from '../models/product-main';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pizza-main',
  templateUrl: './pizza-main.component.html',
  styleUrls: ['./pizza-main.component.css']
})
export class PizzaMainComponent implements OnInit {

              //inject DataService class here
  constructor(private service: DataService) { }


  //declared this to get all contacts from db.json and display on the page
  // This declaration is basically for GetProducts()  
  public productMainAll: Array<ProductMain>; //ProductMain class in found on models

  //Since PostToCart() inside AddToCart() is accepting a parameter with a type ProductMain,
  //  we need to instantiate ProductMain() class here
  public productMainAddToCart = new ProductMain();


  ngOnInit(): void {
    this.GetProducts();
  }

  //GetProducts() ---> is a function in a component that will call a function from service
  //  In this case, GetProducts() is calling GetProducts() from service
  //  Notice the .subscribe method
  //  The PURPOSE of this method is to display the product in browser
  //  Layout for displaying the data in browser can be found in pizza-main.component.html
  GetProducts() {
    this.service.GetProducts().subscribe((data: Array<ProductMain>) => {
      this.productMainAll = data;
      console.log(data);
    });
  }

  //AddToCart() ---> is a function in a component that will call a function from service
  //  In this case, AddToCart() is calling PostToCart() from service
  //  Notice the .subscribe()
  AddToCart() {
                            //productMainAddToCart object is instantiated above
    this.service.PostToCart(this.productMainAddToCart).subscribe(data => this.GetProducts());
  }



}
