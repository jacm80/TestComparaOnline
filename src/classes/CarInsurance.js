import _ from 'lodash';

const mapsMethod = {
   'Full Coverage': '_fullCoverage',
   'Mega Coverage': '_megaCoverage',
   'Special Full Coverage': '_specialFullCoverage',
   'Super Sale': '_superSale'
};

class CarInsurance {

   constructor(products = []) {
      this.products = products;
   }

   getProducts() {
      console.log('--------------- >>>> REFACTOR <<<< ---------------');
      return this.products;
   }

   updatePrice() {
      _.each(this.products, p => {
         if (!_.isEmpty(p)) {
            if (!this.isValid(p.sellIn)) { 
               if (p.name != 'Mega Coverage') p.price = 0;
               return; 
            }
            let method;
            if (p.name in mapsMethod) method = mapsMethod[p.name];
            else method = '_defaultCoverage';
            this[method](p);
            p.sellIn -= 1; // decrement day for iteration
         }
      });
      return this.products;
   }

   _fullCoverage(p) {
      if (p.price < 50) p.price += 1;
   }

   _megaCoverage(p) { }

   _specialFullCoverage(p) {
      if (p.sellIn < 11) {
         if (p.price < 48) p.price += 2
         else p.price = 50;
      }
      if (p.sellIn < 6) {
         if (p.price < 50) p.price += 3
         else p.price = 50;
      }
      if (p.sellIn < 0) p.price = 0;
   }

   _defaultCoverage(p) {      
      if (p.price > 0) p.price -= 1;
   }

   _superSale(p) {
      if (p.price > 0) p.price -= 2;
      else p.price = 0;
   }

   isValid(sellIn){
      return (sellIn > 0);
   }

}

export default CarInsurance;