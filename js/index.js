var deviceWidth = document.documentElement.clientWidth;
/*alert(deviceWidth); *//*求设备宽度*/
if (deviceWidth > 200)
    deviceWidth = 200;
document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';

var mySwiper = new Swiper('.swiper-container', {
    // autoplay: true, //可选选项，自动滑动
    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
})
