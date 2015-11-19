$(document).ready(function () {

    var Cat = (function () {

        function Cat(name, id, imgSrc) {
            this.name = name;
            this.id = id;
            this.imgSrc = imgSrc;
            this.numClicks = 0;
        }

        Cat.prototype.getId = function () {
            return this.id;
        };

        Cat.prototype.getName = function () {
            return this.name;
        };

        Cat.prototype.getImgSrc = function () {
            return this.imgSrc;
        };

        Cat.prototype.getNumClicks = function () {
            return this.numClicks;
        };

        Cat.prototype.setNumClicks = function (num) {
            this.numClicks += 1;
        };

        return Cat;
    })();

    var Page = (function () {

        function Page(cats) {
            this.buildPage(cats);
        }

        Page.prototype.buildPage = function (cats) {
            for (var i = 0; i < cats.length; ++i) {
                (function (index) {
                    var cat = cats[index];
                    var catId = cat.getId();
                    var catName = cat.getName();
                    var imgSrc = cat.getImgSrc();
                    var clicks = cat.getNumClicks();
                    var templateString = "<div id=" + catId + ">\n<div class=\"name\"><h2>" + catName + "</h2></div>\n<div class=\"pic\"><img width=\"400\" src=\"" + imgSrc + "\"></div>\n<div class=\"clicks\"><h3>Total clicks: <span class=\"count\">" + clicks + "</span></h3></div>\n</div>";
                    $("#cats").append(templateString);
                    $("#" + catId).find("img").click(function () {
                        cat.setNumClicks(cat.getNumClicks() + 1);
                        $("#" + catId).find(".count").text(cat.getNumClicks());
                    });
                })(i);
            }
        };
        return Page;
    })();

    var cat1 = new Cat("Grumpy", "cat1", "http://static4.businessinsider.com/image/5485631e69bedda63303ed51/grumpy-cat-has-earned-her-owner-nearly-100-million-in-just-2-years.jpg");
    var cat2 = new Cat("Happy", "cat2", "http://vignette2.wikia.nocookie.net/austinally/images/0/06/HappyCat.jpg/revision/latest?cb=20130527140922");

    var catArray = [cat1, cat2];

    var page = new Page(catArray);
});
