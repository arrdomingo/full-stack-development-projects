import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from '../models/cart';
import { ProductMain } from '../models/product-main';

@Injectable({
  providedIn: 'root'
})
export class DataService {

            //inject HttpClient in order to call the data from db.json
  constructor(private http: HttpClient) { }

  //GetProducts() is use to get/retrieve the Products in db.json file 
  //  and display it in browser. Code to display the data in browser
  //  can be found in pizza-main-component.ts
  GetProducts () {
    return this.http.get(environment.apiUrlProducts); //apiUrlProducts is the URL found in environment folder
  }

  //PostToCart() ---> use to ADD data in db.json
  //  Method for subscribing PostToCart() in found in pizza-main.component.ts which is AddToCart()
  PostToCart(productMainModel: ProductMain) { //means that PostToCart() is expecting ProductMain param found in models folder
    return this.http.post(environment.apiUrlCart, productMainModel); //requires 2 params; url and type of ProductMain
  }




  //-------------------------//
  //--- Methods for Cart ----//
  //-------------------------//

  //Method to get cart items
  GetCartItems(){
    return this.http.get(environment.apiUrlCart);
  }

  //
  PostCartItem(cart: Cart) {
    return this.http.post(environment.apiUrlCart, cart);
  }

  //method to delete the cart items
  DeleteCartItem(id: number){
    return this.http.delete(`${environment.apiUrlCart}/${id}`);
  }

  //this method will update the value of cart item base on ID
  UpdateCartItem(id: number, cart: Cart){
    return this.http.put(`${environment.apiUrlCart}/${id}`, cart);
  }






  //This will reload the nav
  public notify = new BehaviorSubject<any>('');

  notifyObservable$ = this.notify.asObservable();
  
      public notifyOther(data: any) {
      if (data) {
          this.notify.next(data);
      }
  }
}
