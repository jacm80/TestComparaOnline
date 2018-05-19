import { expect } from 'chai';

import _ from 'lodash';
import Product from '../classes/Product';
import CarInsurance from '../classes/CarInsurance';

import { productsAtDayZero } from '../fixtures/productsData';

const carInsurance = new CarInsurance(productsAtDayZero);

describe("Create Product", () => {
   it("it should create a product: { name: Medium Coverage, sellIn: 10, price: 20 }",  () => {
      const p1 = new  Product('Medium Coverage', 10, 20);
      expect(p1.name).equal("Medium Coverage");
      expect(p1.sellIn).equal(10);
      expect(p1.price).equal(20);
   });
});

let _previous = [{}];
let fc = [ ];
describe("Check CarInsurance", () => {

   let carInsurances = new CarInsurance(productsAtDayZero);

   for (let i = 1; i <= 30; i += 1) {
      
      let updated = carInsurances.updatePrice();
      fc[i] = Object.assign({}, updated[1]);

      _.map(updated, (p,index) => {
         _previous[i] = Object.assign({}, p);
         it("1) it should be once the sell by date has passed, price degrades twice as fast", () => {
            if (i > 1) expect(_previous[i - 1].price).to.be.at.least(_previous[i].price);
         });
         it("2) it should check the price of a product is never negative", () => {
            expect(p.price).to.be.at.least(0);
         });
         if (p.name !== 'Mega Coverage') {
            it("4) it should check the price of a product is never more than 50", () => {
               expect(p.price).to.be.at.most(50);
            });
         }
         if (p.name === 'Mega Coverage') {
            it("5) it should check Mega Coverage never has to be sold or decreases in price", () => {
               expect(p.price).to.be.at.equal(80);
            });
         }
         if (p.name === 'Special Full Coverage') {
            it("6) it should price drops to 0 when no more days left (and the product is not valid anymore", () => {
               if (p.sellIn<0)
               expect(p.price).to.be.at.equal(0);
            });
         }
      });
   }

   it("3) it should be that the full Coverage actually increases in price the older it gets", () => {
      fc.shift();
      for(let f=1;f<fc.length;f++){
         if (fc[f].price > 0) expect(fc[f-1].price).to.be.most(fc[f].price);
      }
   });

});