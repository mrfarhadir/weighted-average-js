###Average weighted algorithm

assume that you have a set of data and each member has an extra parameter , when you want to select or order your memebers based on their parameter you need a weighted average alghorithm.

## Example :

Suppose that you have list of products which each product has a field which shows how many it's been sold now we want to order our product in a way that those product which are not sold or they've been sold less , are in better view for users in other words products with less sale count could be shown on top for selling. so we you will have an array of products ID and another array for thier sale count .

##Installation :
`npm install _wa`

## simple usage
```javascript
var Wa = require('_wa');
let objs = [1,2,3,4];
let params = [28,32,2,8];
let wa = new Wa(objs,params);
console.log(wa);
/* [3,4,1,2] */
```
if you run this code multiple times mostly 3 and 4 are in the first and 2 in the last because of their parameters here we assume that product number 2 has been sold 32 time and product nnumber 3 has been sold just 2 times so our algorithm puts product number 3 to front to be sold more
##### I have this module for php to just visit my github page.
> for any question or getting in tocuh : info@mrfarhad.ir
