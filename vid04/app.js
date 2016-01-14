(function() {
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
      this.products = gems;
  });

  app.controller('PanelController', function(){
      })

  app.controller("ReviewController", function(){
      this.review={};

      this.addReview = function(product) {
        product.reviews.push(this.review);
        this.review={};
      };
  });

  app.directive('productTitle', function() {
      return {
          restrict: 'E',
          templateUrl: 'product-title.html'
      };
  });

  app.directive('productPanels', function(){
      return {
          restrict: 'E',
          templateUrl: 'product-panels.html',
          controller: function() {
            this.tab = 1;
            this.selectTab = function(setTab) {
            this.tab = setTab;
            };

            this.isSelected = function(checkTab) {
                return this.tab === checkTab;
            };

          },
          controllerAs: 'panels'
      };
  });

  var gems = [
      {
    name: 'Dodecahedron',
    price: 2.00,
    description: 'Some gems have hidden qualities behind their luster, beyond their shine...Dodeca is one of those gems.',
    images: [
        {
            full: 'gem-02.gif',
        }
    ],
    reviews: [
        { stars: 5,
        body: "I love this product!",
        author: "joe@thomas.com"
        },
        {
            stars: 1,
            body: "This product sucks",
            author: "tim@hater.com"
        }
    ],

  },
  {
      name: "Pentagonal Gem",
      price: 5.95,
      description: "A marvelous gem for those of us who love the number 5 and gems, you can admire each point in its beauty.",
      images: [
          {
              full: 'gem-02.gif',
          }
      ]

  }
  ]

})();
