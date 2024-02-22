// var heart = document.querySelector('.heart');
// var pic = document.querySelector('.post-pic');
// var likeBtn = document.querySelector('.like');

// pic.addEventListener('dblclick', function() {
//     function abc(){
//         gsap.set(heart, { y: 0, opacity: 1, scale: 0 });

//         var tl = gsap.timeline();
    
//         tl.to(heart, {
//             scale: 1,
//             duration: 0.5,
//             ease: 'power2.out'
//         })
//         .to(heart, {
//             y: -100,
//             opacity: 0,
//             duration: 0.5,
//             ease: 'power2.out'
//         });
//     }
//     abc();

//     function likeAnime(){
//         var tl = gsap.timeline();

//         tl.to(likeBtn, {
//             scale: 1.3,
//             color: 'red',
//             duration: 0.5,
//             ease: 'power2.out'
//         });

//         tl.to(likeBtn, {
//             scale: 1,
//             color: 'red',
//             duration: 0.5,
//             ease: 'power2.out'
//         });
//     }
//     likeAnime();
// });

var boxes = document.querySelectorAll('.view-story');
boxes.forEach(function(box){
    box.addEventListener('click',function(){
        document.querySelector('.story-page').style.display = 'block';
        document.querySelector('.story-page').style.backgroundImage = `url(${event.target.src})`
        document.querySelector('.story-page').style.backgroundSize = 'cover';
        document.querySelector('.story-page').style.backgroundPosition = 'center';
    })

    
})
setInterval(function(){
    document.querySelector('.story-page').style.display = 'none';
},3000)


var hearts = document.querySelectorAll('.heart');
var pics = document.querySelectorAll('.post-pic');
var likeBtn = document.querySelectorAll('.like');

function abc() {
    hearts.forEach(function(heart) {
        gsap.set(heart, { y: 0, opacity: 1, scale: 0 });

        var tl = gsap.timeline();

        tl.to(heart, {
            scale: 1,
            duration: 0.5,
            ease: 'power2.out'
        })
        .to(heart, {
            y: -100,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
}

function likeAnime() {
    likeBtn.forEach(function(btn) {
        var tl = gsap.timeline();

        tl.to(btn, {
            scale: 1.3,
            color: 'red',
            duration: 0.5,
            ease: 'power2.out'
        });

        tl.to(btn, {
            scale: 1,
            color: 'red',
            duration: 0.5,
            ease: 'power2.out'
        });
    });
}

pics.forEach(function(pic) {
    pic.addEventListener('dblclick', function() {
        abc();
        likeAnime();
    });
});