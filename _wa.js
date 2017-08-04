var wa = function(objs,params) {
  objs=objs;
  params=params;
  x=[];
  var j=0,percent=0;
  for (var key in params) {
    var k = this.getMax(params)-params[key]+1;
    var s=0;
    for(i=0;i<k;i++){
      x[j]=objs[key];
      j++;
    }
  }
  x=this.shuffle(x);
  newObjs=[];
  for(key in objs){
    var randObj = x[Math.floor(Math.random() * x.length)];
    this.removeArrEl(x,randObj);
    newObjs[key]=randObj;
  }
  return newObjs
};
wa.prototype.getMax = function (Arr) {
  return Math.max.apply(null, Arr);
};
wa.prototype.shuffle = function(Arr) {
  var currentIndex = Arr.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = Arr[currentIndex];
    Arr[currentIndex] = Arr[randomIndex];
    Arr[randomIndex] = temporaryValue;
  }
  return Arr;
}
wa.prototype.removeArrEl = function(Arr,el){
  var what=el;
  var a = arguments, L = a.length, ax;
    while (L > 1 && Arr.length) {
        what = a[--L];
        while ((ax= Arr.indexOf(what)) !== -1) {
            Arr.splice(ax, 1);
        }
    }
    return Arr;
}
module.exports = wa ;
