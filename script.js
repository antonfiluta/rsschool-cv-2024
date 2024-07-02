const imgs = document.getElementsByClassName('antonImg');

let sum = 4;

for (let i = 0; i < imgs.length; i++) {
    sum = sum - 4;
    imgs[i].style.transform = "rotate(" + sum + "deg)";


    imgs[i].addEventListener('mouseenter', function () {
        imgs[i].style.transform = "rotate(" + 20 + "deg)";
        imgs[i].style.left = "20vw";
        imgs[i].style.top = "28vh";
      })

    imgs[i].addEventListener('mouseleave', function () {
        imgs[i].style.transform = "rotate(" + (0 - (4 * i)) + "deg)";
        imgs[i].style.left = "13vw";
        imgs[i].style.top = "30vh";
    })
}