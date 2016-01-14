(function() {
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
      this.products = gems;
  });

  app.controller('PanelController', function(){
      this.tab = 1;
      this.selectTab = function(setTab) {
          this.tab = setTab;
      }
      this.isSelected = function(checkTab) {
          return this.tab === checkTab;
      }
  })

  var gems = [
      {
    name: 'Dodecahedron',
    price: 2.00,
    description: 'Some gems have hidden qualities behind their luster, beyond their shine...Dodeca is one of those gems.',
    images: [
        {
            full: 'gem-02.gif',
        }
    ]

  },
  {
      name: "Pentagonal Gem",
      price: 5.95,
      description: "A marvelous gem for those of us who love the number 5 and gems, you can admire each point in its beauty.",
  }
  ]

})();
