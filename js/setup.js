$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            10000: {
                items: 5
            }
        }
    });
});

//Filmes principal
showDescription = function () {
    $('.video-content').fadeIn('fast', function () {
        $('.video-content').css('display', 'block')
    })
};
hideDescription = function () {
    $('.video-content').fadeOut('slow', function () {
        $('.video-content').css('display', 'none')
    });
}

var video = document.getElementById("myVideo");
if (video) {
    video.onended = showDescription();
}

function playVideo() {
    if (video) {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
}

function pauseVideo() {
    if (video) {
        video.pause();
    }
}

setTimeout(function () {
    if (video) {
        video.pause();
        playVideo();
        hideDescription();
    }
}, 1500);

document.addEventListener('scroll', function (e) {
    //console.log(window.scrollY);
    if (window.scrollY >= 800) {
        video.load();
        video.pause();
    }
});

$('.filme-principal').on('click', function(){
    playVideo();
})
//

function addItem(listItem, id) {
    //div.item
    var div = document.createElement('div');
    $(div).addClass('item');

    //div.overlay
    var overlay = document.createElement('div');
    $(overlay).addClass('thumb-overlay');

    //title
    var title = document.createElement('h2');
    title.innerHTML = listItem.title;
    $(overlay).append(title);

    //video
    var novoVideo = document.createElement('video');
    $(novoVideo).addClass('thumb-video');
    $(novoVideo).attr('preload', 'none');
    $(novoVideo).attr('height', '600px');
    $(novoVideo).attr('width', '100%');
    //source
    $(source).attr('preload', 'none');
    var source = document.createElement('source');
    $(source).attr('src', listItem.src);
    $(source).attr('type', 'video/mp4');

    //apensos    
    $(novoVideo).append(source);
    $(div).prepend(overlay);
    $(div).append(novoVideo);
    $('#' + id).append($(div));
};

//Series
var series = [
    {
        poster: "/img/pokemon.jpg",
        title: 'Will Smith descarrega 6000 tijolos',
        src: "/src/smith.mp4"
    },
    {
        poster: "/img/demolidor.jpg",
        title: 'Aquela cena massa de Demolidor',
        src: "/src/demolidor.mp4"
    }, {
        poster: "/img/pokemon.jpg",
        title: 'As melhores partes de 999 anos de Pokemon',
        src: "/src/pokemon.mp4"
    }, {
        poster: "/img/cafe.png",
        title: 'Quero caféeeeeeeee',
        src: "/src/cafe.mp4"
    }];

var filmes = [{
    poster: "/img/starwars.jpg",
    title: 'Memes clássicos de um filme clássico',
    src: "/src/starwars.mp4"
}, {
    poster: "/img/hobbit.jpg",
    title: 'A sociedade dos memes',
    src: "/src/hobbit.mp4"
}, {
    poster: "/img/guerracivil.jpg",
    title: 'Se a guerra civil se passasse no Brasil',
    src: "/src/guerracivil.mp4"
}, {
    poster: "/img/troia.jpg",
    title: 'O abestado de Tróia',
    src: "/src/troia.mp4"
}]

series.forEach(listItem => {
    addItem(listItem, 'carrosel-serie');
});
filmes.forEach(listItem => {
    addItem(listItem, 'carrosel-filme');
});

var itens = document.getElementsByClassName('item');
$(itens).map(function (value, item) {
    //console.log(item);
    item.addEventListener('click', function () {
        let index = $(item).find('video');

        if ($(index).get(0).currentTime > 0) {
            $(item).find('div').css('display', 'block');

            $(index).get(0).pause();
            $(index).currentTime = 0;
            $(index).get(0).load();
            $(index).get(0).pause();
        } else {
            $(item).find('div').css('display', 'none');
            //reset(index);            
            /*$(index).on('mouseout', function () {
                $(index).get(0).pause();
                $(index).get(0).currentTime = 0;
                $(index).get(0).load();
                $(index).get(0).pause();
            });*/
            $(index).get(0).play();
        }
    })
});

var videos = document.getElementsByClassName('thumb-video');
$(videos).map(function (value, index) {
    index.pause();
    index.currentTime = 0;
    index.load();
    index.pause();
})