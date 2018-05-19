# ComparaOnline Test

Design an Object Oriented solution, Node.js with es6 Test 

### Bussines rules:
* All Products have a sellIn value which denotes the number of days we have to sell the product.
* All Products have a price value which denotes how much the product cost.
* At the end of each day our system lowers both values for every product.

## Install Application

Clone repository and install dependencies with yarn or npm 

```$ git clone https://github.com/jacm80/TestComparaOnline.git```

```$ yarn```

```$ yarn start```

### or
```
$ npm install
```

```
$ npm start
```

Install mocha and babel in global context for the execute test 

```npm i -g babel mocha```

## Folder structure

* node_modules: dependencies libraries 
* output: report file generate with:

```yarn start```

or 

```npm start```

It generate the file products_after_30_days.txt with report list

* src: sources application:
   1. clases: source clases based in OOP (CarInsurance, Product)
   2. fixtures: fixed data to test
   3. tests: files test with mocha and chai
* index.js: main program

## Script coverage

- yarn start or npm start: run application
- yarn test or npm test: run test
