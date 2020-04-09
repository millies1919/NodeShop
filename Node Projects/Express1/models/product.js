const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = (callBack) => {
  fs.readFile(productsFilePath, (error, fileData) => {
    if (error) {
      return callBack([]);
    }
    callBack(JSON.parse(fileData));
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(productsFilePath, JSON.stringify(products), (error) => {
        console.log(error);
      });
    });
  }

  static fetchAll(callBack) {
    getProductsFromFile(callBack);
  }
};
