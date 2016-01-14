(function() {
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
      this.products = gems;
  });

  var gems = [
      {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Some gems have hidden qualities behind their luster, beyond their shine...Dodeca is one of those gems.',
    canPurchase: true,
    // soldOut: true
  },
  {
      name: "Pentagonal Gem",
      price: 5.95,
      description: "A marvelous gem for those of us who love the number 5 and gems, you can admire each point in its beauty.",
      canPurchase: false
  }
  ]

})();
