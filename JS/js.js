/**
 * Created by slience on 2017/6/22.
 */


function $(id) {
    return document.getElementById(id);
}


window.onload = function () {


    $('close_banner').onclick = function () {
        $("top_banner").style.display = "none";
    };

    /**/
    $("slide").onmouseover = function () {
        $("arr").style.visibility = "visible";
    };
    $("slide").onmouseout = function () {
        $("arr").style.visibility = "hidden";
    };


    /**/
    /*var pic = document.getElementById("pic");*/
    var pics = document.getElementById("slide").getElementsByTagName("a");
    var lis = document.getElementById("circle").getElementsByTagName("li");

    for (i = 0; i < lis.length; i++) {

        lis[i].index = i;
        /*给每个li 定义一个index属性*/
        lis[i].onmouseover = function () {
            for (j = 0; j < lis.length; j++) {
                lis[j].className = "";
                pics[j].style.display = "none";
            }
            this.className = "current";
            pics[this.index].style.display = "block";
        }
    }


    /*  function change(liid, bg) {
     $(liid).onmouseover = function () {
     pic.src = bg;
     /!*首先干掉所以人   剩下自己*!/
     for(i=0;i<lis.length;i++){
     lis[i].className="";
     }
     this.className = "current";
     }

     }

     change("li01", "img/11.jpg");
     change("li02", "img/22.jpg");
     change("li03", "img/33.jpg");
     change("li04", "img/44.jpg");
     change("li05", "img/55.jpg");*/


    /**/
    $("loginclick").onclick = function () {
        $("mask").style.display = "block";
    };


    $("close_box").onclick = function () {
        $("mask").style.display = "none";
    };


    $("txt").onfocus = function () {
        /*用户没有输入的时候，或者用户第一次使用的时候*/
        if (this.value == "搜索") {
            this.value = "";
            this.style.color = "#000"
        }


    };
    $("txt").onblur = function () {
        /*input的值是空的时候，我们再复原*/
        if (this.value == "") {
            this.value = "搜索";
            this.style.color = "#ccc";
        }

    };


};
