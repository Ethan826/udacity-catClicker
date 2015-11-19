/// <reference path="./typings/jquery/jquery.d.ts"/>

$(document).ready(function(){

  class Cat {
    private name: string;
    private id: string;
    private imgSrc: string;
    private numClicks: number; // Stateful

    constructor(name: string, id: string, imgSrc: string) {
      this.name = name;
      this.id = id;
      this.imgSrc = imgSrc;
      this.numClicks = 0;
    }

    getId(): string {
      return this.id;
    }

    getName(): string {
      return this.name;
    }

    getImgSrc(): string {
      return this.imgSrc;
    }

    getNumClicks(): number {
      return this.numClicks;
    }

    setNumClicks(num: number) {
      this.numClicks += 1;
    }
  }

  class Page {

    buildPage(cats: Cat[]) {
      for(var i = 0; i < cats.length; ++i) {
        (function(index){
          let cat = cats[index];
          let catId = cat.getId();
          let catName = cat.getName();
          let imgSrc = cat.getImgSrc();
          let clicks = cat.getNumClicks();

          let templateString =
          `<div id=${catId}>
          <div class="name"><h2>${catName}</h2></div>
          <div class="pic"><img width="400" src="${imgSrc}"></div>
          <div class="clicks"><h3>Total clicks: <span class="count">${clicks}</span></h3></div>
          </div>`;

          $("#cats").append(templateString);
          $(`#${catId}`).find("img").click(function(){
            cat.setNumClicks(cat.getNumClicks() + 1);
            $(`#${catId}`).find(".count").text(cat.getNumClicks());
          });

        })(i);
      }
    }

  constructor(cats: Cat[]) {
    this.buildPage(cats);
  }
}

var cat1 = new Cat("Grumpy", "cat1", "./grumpy.jpg");
var cat2 = new Cat("Happy", "cat2", "./happy.jpg");
var catArray = [cat1, cat2];

var page: Page = new Page(catArray);

});
