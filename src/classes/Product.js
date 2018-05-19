/** 
 * The price of a product is never negative
 * The price of a product is never more than 50
*/

class Product {
   
   constructor(name, sellIn, price) {
      // const p = { name, sellIn, price };
      // if (this._isNegative(p)) return; 
      // if (this._checkMoreFifty(p)) return;
      this.name = name;
      this.sellIn = sellIn;
      this.price = price;
   }

   _isNegative(p){
     if (p.price < 0) {
        console.log(`${p.name} is negative: ${p.price}`);  
        return true;
     };
     return false;
   }

   _checkMoreFifty(p){
      if (p.price > 50) {
         console.log(`${p.name} is > 50: ${p.price}`);  
         return true; 
      };
      return false;
   }

}


export default Product;