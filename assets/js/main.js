(function($) {

    $(document).on("ready", function(){


        $(function(){
            mySwiper = $('.swiper-projects').swiper({
                mode:'horizontal',
                loop: true,
                autoResize: true,
                speed: 400,
                onSlideChangeStart: function(swiper){
                    /* panelHide($('.panel-slide')); */
                }
            });
            mySwiperSmall = $('.swiper-profile').swiper({
                mode:'horizontal',
                loop: false,
                autoResize: true,
                speed: 400,
                watchActiveIndex: true,
                onInit: function(swiper){
                    var slide = $(swiper.activeSlide()),
                        slideSec = slide.next(),
                        slideThird = slide.next().next(),
                        slideFourth = slide.next().next().next(),
                        src = $(slide).find('img').attr("data-src"),
                        srcSec = slideSec.find('img').attr("data-src"),
                        srcThird = slideThird.find('img').attr("data-src"),
                        srcFourth = slideFourth.find('img').attr("data-src");
                    slide.find("img").attr("src", src);
                    slideSec.find("img").attr("src", srcSec);
                    slideThird.find("img").attr("src", srcThird);
                    slideFourth.find("img").attr("src", srcFourth);
                },
                onSlideNext: function(swiper){
                    var slide = $(swiper.activeSlide()),
                        slideSec = slide.next(),
                        slideThird = slide.next().next(),
                        slideFourth = slide.next().next().next(),
                        src = $(slide).find('img').attr("data-src"),
                        srcSec = slideSec.find('img').attr("data-src"),
                        srcThird = slideThird.find('img').attr("data-src"),
                        srcFourth = slideFourth.find('img').attr("data-src");
                    slide.find("img").attr("src", src);
                    slideSec.find("img").attr("src", srcSec);
                    slideThird.find("img").attr("src", srcThird);
                    slideFourth.find("img").attr("src", srcFourth);
                }
            });
        });
        /*********************************************************
        /
        /   Swiper Pagination
        /
        *********************************************************/
        $('.prev', '.swiper-pagination').on("click", function(e){
            e.preventDefault();
            mySwiper.swipePrev();
        });
        $('.next', '.swiper-pagination').on("click", function(e){
            e.preventDefault();
            mySwiper.swipeNext();
        });



        $.getJSON( "../../../get-tweets1.1.php", function( data ) {

        }).done(function(data) {
            var items = [],
                elems = data,
                statusCount = data.statuses_count,
                about = data.description;
            // console.log(elems);
            // console.log(statusCount);
            $('.about-me div').text(about);
            // $('.social .twitter .count').text(statusCount);
            countUp($('.social .twitter .count'), statusCount);
        });



        $.getJSON( "../../../getflickr.php", function( data ) {

        }).done(function(data) {
            var items = [],
                elems = data;
            // console.log(elems);
            photoCount = data.person.photos.count._content;
            // console.log(photoCount);
            // $('.social .flickr .count').text(photoCount);
            countUp($('.social .flickr .count'), photoCount);
        });


        $.getJSON( "../../../getflickrphoto.php", function( data ) {

        }).done(function(data) {
            var items = [],
                elems = data,
                photos = data.photos.photo.sort(function() { return 0.5 - Math.random() });
            // console.log(elems);
            // console.log(rNum);
            // $('.top-img img').attr("src", url);
            for (var i = 0; i < photos.length; i++) {
                var rNum = getRandomInt(0, photos.length),
                    // photo = data.photos.photo[rNum],
                    photo = data.photos.photo[i],
                    farm = photo.farm,
                    id = photo.id,
                    server = photo.server,
                    secret = photo.secret;
                    url = "https://farm" + farm + ".staticflickr.com/" + server + "/" + id + "_" + secret + "_z.jpg"
                    slide = "<div class='swiper-slide'>\
                                    <img src='https://farm4.staticflickr.com/3723/9490930072_6b3609f4d9_z.jpg' data-src='" + url + "' alt='cover photo'>\
                                 </div>";
                console.log(url);
                $('.swiper-profile .swiper-wrapper').append(slide);
                mySwiperSmall.reInit();
            };
        });


        $.getJSON( "https://api.github.com/users/Aaronfischer", function( data ) {

        }).done(function(data) {
            var items = [],
                elems = data;
            // console.log(elems);
            repoCount = data.public_repos;
            gistCount = data.public_gists;
            countUp($('.social .github .count'), gistCount);
            // $('.social .github .count').text(gistCount);
        });


        // console.log('about to get instagram');
        // $.getJSON( "../../../getInstagram.php", function( data ) {

        // }).done(function(data) {
        //     var items = [],
        //         elems = data;
        //     console.log(elems);
        // });





    });




        // Enter num from and to
        function countUp(obj, finish){
            $({countNum: obj.text()}).animate({countNum: finish}, {
                duration: 1800,
                easing:'linear',
                step: function() {
                    // What todo on every count
                    // console.log(Math.floor(this.countNum));
                    obj.text(Math.floor(this.countNum));
                },
                complete: function() {
                    obj.text(this.countNum);
                }
            });
        }
        // Returns a random integer between min and max
        // Using Math.round() will give you a non-uniform distribution!
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }


})(jQuery);