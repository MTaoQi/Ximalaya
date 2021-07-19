var deviceWidth = document.documentElement.clientWidth;
/*alert(deviceWidth); */
/*求设备宽度*/
if (deviceWidth > 200)
    deviceWidth = 200;
document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';

function show1() {
    document.getElementById("div1").style.display = "block";
    document.getElementById("div2").style.display = "none";
    document.getElementsByClassName("input")[0].style.display = "none";
};

function show2() {
    document.getElementById("div2").style.display = "block";
    document.getElementById("div1").style.display = "none";
    document.getElementsByClassName("input")[0].style.display = "none";
}

var json = [{
    "img": "../img/page2-6.jpg",
    "h4": "蕊希解忧室：温暖你的365个夜晚",
    "span1": "听众故事@废话特别多的肥宅：勇气和爱相加..",
    "span2": "17天前"
}, {
    "img": "../img/page2-7.jpg",
    "h4": "鹅妈妈童谣(孩子最好的英语启蒙)",
    "span1": "39 One,two,three,four",
    "span2": "2020-11"
}, {
    "img": "../img/page2-8.jpg",
    "h4": "历年大学英语四级听力真题原文及答案",
    "span1": "2020年12月大学英语四级听力真题(第1套)",
    "span2": "15分钟前"
}];

var ul = document.querySelector(".twoImg").getElementsByTagName("ul")[0];

function addRow(row) {
    var hang =
        "<div><img src = '" + row.img + "'></div><div><h4>" + row.h4 + "</h4><span>" + row.span1 + "</span><span>" + row.span2 + "</span></div>";
    var ne = document.createElement("li");
    ne.innerHTML = hang;
    ul.appendChild(ne);
}
for (var i = 0; i < json.length; i++) {
    addRow(json[i]);
}

function xx(){
    window.location.assign("../index.html");
}