const cVal = () => Math.floor(Math.random() * 155) + 100;

const lineFadeIn = anime({
    targets: '#Logo .lines path,polyline',
    opacity: [0, 1],
    easing: 'easeInOutSine',
    duration: 250,
    delay: function(el, i) { return i * 250 },
}).finished
    .then(() => {   

        const logoColor = anime({
            targets: '#Logo',
            color: () => `#88a`,
            duration: 2000,
            easing: 'linear',
            direction: 'alternate',
            loop: true
        })
});

const cloudA = anime({
    targets: '#MoonAndClouds #cloud-a path',
    translateX: 10,
    duration: 7000
})

const cloudB = anime({
    targets: '#MoonAndClouds #cloud-b path',
    translateX: -10,
    duration: 7000
})

document.getElementById('Logo').addEventListener('click', function () { 
    const moonFadeInOut = anime({
        targets: '#Moon',
        borderColor: `#000`,
        duration: 400,
        easing: 'linear',
        direction: 'alternate',
    })

    const lineDrawing = anime({
        targets: '#Logo .lines path,polyline',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 100,
        delay: function (el, i) { return i * 150 },
        direction: 'reverse'
    });
})

  
console.log(typeof lineDrawing);

console.log('hey');