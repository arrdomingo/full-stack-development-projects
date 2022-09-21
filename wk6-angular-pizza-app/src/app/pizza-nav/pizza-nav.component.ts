import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pizza-nav',
  templateUrl: './pizza-nav.component.html',
  styleUrls: ['./pizza-nav.component.css']
})
export class PizzaNavComponent implements OnInit {
  
              //inject DataService class here
  constructor(private service: DataService) { }

  //these properties will be used in html files
  public cartItems: Array<Cart>
  public cartItem: Cart
  public totalAmount: number = 0
  public gst : number = 0
  public paidPrice: number = 0
  public totalItem: number = 0

  ngOnInit(): void {

    this.service.notifyObservable$.subscribe(res => {
      if(res.refresh){
        // get your grid data again. Grid will refresh automatically
        this.GetCartItems()
      }
    })
    this.GetCartItems()
  }


  //method to subscribe the PostCartItem in data.service
  AddCartItem(){
    this.service.PostCartItem(this.cartItem).subscribe(data => console.log(data))
  }

  //this method will subscribe GetCartItems() in data.service
  GetCartItems(){
    this.totalAmount = 0
    this.gst = 0
    this.paidPrice = 0
    this.service.GetCartItems().subscribe((data: Array<Cart>) => {
    this.cartItems = data
    this.totalItem = data.length
    this.cartItems.forEach(item => {
      this.totalAmount += item.price * item.quantity
    })

    this.gst = this.totalAmount * 0.05
    this.paidPrice = this.totalAmount + this.gst
    })  
  }

  //this will display the selected items
  showCartItems (){
    this.GetCartItems()
  }

  //method to subscribe the DeleteCartItem() in data.service
  deleteCartItem(id:number){
    this.service.DeleteCartItem(id).subscribe(data => this.GetCartItems())
  }


  //this plus() and minus() is for the updating the count of items
  plus(item){
    if(item.quantity != 10){
      item.quantity += 1
      
    }
    this.service.UpdateCartItem(item.id, item).subscribe( () => this.GetCartItems())
  }
  minus(item){
    if(item.quantity != 1){
      item.quantity -= 1
      
    }
    this.service.UpdateCartItem(item.id, item).subscribe(() => this.GetCartItems())
  }



}
