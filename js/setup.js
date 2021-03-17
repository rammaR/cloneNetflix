$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
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
        //playVideo();
        hideDescription();
    }
}, 1500);

document.addEventListener('scroll', function (e) {
    //console.log(window.scrollY);
    if (window.scrollY >= 800) {
        video.load();
    }
})
//

function addItem(listItem, id) {
    console.log('Apensou')
    var div = document.createElement('div');
    $(div).addClass('item');
    var novoVideo = document.createElement('video');
    $(novoVideo).addClass('thumb-video');
    $(novoVideo).attr('preload', 'none');
    $(novoVideo).attr('height', '600px');
    $(novoVideo).attr('width', '100%');
    $(novoVideo).attr('poster', listItem.poster);
    var source = document.createElement('source');
    $(source).attr('src', listItem.src);
    $(source).attr('type', 'video/mp4');
    $(novoVideo).append(source);
    $(div).prepend(novoVideo);

    $('#' + id).append($(div));
};

//Series
var series = [{
    poster: "/img/demolidor.jpg",
    src: "/src/demolidor.mp4"
}, {
    poster: "/img/pokemon.jpg",
    src: "/src/pokemon.mp4"
}];

var filmes = [{
    poster: "/img/starwars.jpg",
    src: "/src/starwars.mp4"
}, {
    poster: "/img/hobbit.jpg",
    src: "/src/hobbit.mp4"
}, {
    poster: "/img/guerracivil.jpg",
    src: "/src/guerracivil.mp4"
}, {
    poster: "/img/troia.jpg",
    src: "/src/troia.mp4"
}]

series.forEach(listItem => {
    addItem(listItem, 'carrosel-serie');
});
filmes.forEach(listItem => {
    addItem(listItem, 'carrosel-filme');
});


//Thumbs-video
function reset(paramVideo) {
    paramVideo.pause();
    paramVideo.currentTime = 0;
    paramVideo.load();
    paramVideo.pause();
}

function playThumbVideo(thumbVideo){
    thumbVideo.removeEventListener("click", playThumbVideo);

    thumbVideo.addEventListener('click', function () {
        reset(thumbVideo);
    });
    thumbVideo.addEventListener('mouseout', function () {
        reset(thumbVideo);
    });
    setTimeout(function () {
        thumbVideo.play();
    }, 1000)
}

var videos = document.getElementsByClassName('thumb-video');

$(videos).map(function (value, index) {
    //console.log(value);    
    console.log(index);
    listenerPlay = index.addEventListener('click', playThumbVideo);
})