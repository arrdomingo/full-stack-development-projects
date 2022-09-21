import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { ProductMain } from 'src/app/models/product-main';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})
export class PizzaItemComponent implements OnInit {

  //passing data from child-parent component
  @Input() public productMain: ProductMain

              //inject DataService class here
  constructor(private service: DataService) { }

  public cart = new Cart()
  public cartItems: Array<Cart>

  ngOnInit(): void {
  }

  //method in Adding to Cart
  handleAddToCart(){
    console.log(this.productMain.name)
    this.cart.pizzaName = this.productMain.name
    this.cart.price = this.productMain.price
    this.cart.quantity = 1
    this.cart.pizzaId = this.productMain.id
    
    this.service.PostCartItem(this.cart).subscribe(
    data => console.log(data)  
    )
    
    this.refreshGridInAnotherComponent()
  }

  refreshGridInAnotherComponent(){
    this.service.notifyOther({refresh: true});
  }

}
