import { expect } from 'chai';

import Product from '../classes/Product';
import CarInsurance from '../classes/CarInsurance';

describe("Create Product", () => {
   it("it should create a product: { name: Medium Coverage, sellIn: 10, price: 20 }",  () => {
      const p1 = new  Product('Medium Coverage', 10, 20);
      expect(p1.name).equal("Medium Coverage");
      expect(p1.sellIn).equal(10);
      expect(p1.price).equal(20);
   });
})