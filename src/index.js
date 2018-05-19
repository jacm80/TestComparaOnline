import _ from 'lodash';
import * as fs from 'fs'; 

import CarInsurance from './classes/CarInsurance';
import { productsAtDayZero } from './fixtures/productsData';

const output = () => new Promise((resolve, reject) => {
   const carInsurance = new CarInsurance(productsAtDayZero);
   let file = fs.createWriteStream('output/products_after_30_days.txt');
   file.on('error', err => console.log(`Error to create file: ${err}`));
   for (let i = 1; i <= 30; i += 1) {
      file.write(`Day ${i}\n`);
      file.write('name, sellIn, price\n');
      _.map(carInsurance.updatePrice(), p => {
         file.write(`${p.name}, ${p.sellIn}, ${p.price}\n`);
      });
      file.write('\n');
   }
   file.end();
});

output()
   .then(console.log('Create file with success'))
   .catch(err => console.log(err));