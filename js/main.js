$(function () {
    $('.slider').slick({
        autoplay: true, //自動でスクロール
        autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
        speed: 5000, //スライドが流れる速度を設定
        cssEase: "linear", //スライドの流れ方を等速に設定
        slidesToShow: 4, //表示するスライドの数
        swipe: false, // 操作による切り替えはさせない
        arrows: false, //矢印非表示
        pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
        pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
        rtl: true, //スライダーを左から右に流す（逆向き）
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3, //画面幅750px以下でスライド3枚表示
                }
            }
        ]
    });
});



$('.history-btn').on('click', function () {
    $('.hidden-view').toggleClass('open');
});



$(function () {
    $(window).scroll(function () {
        $('.js-fadeLeft').each(function () {
            var pos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > pos - windowHeight + 100) {
                $(this).addClass('scroll');
            }
        });
    });
});

$(function () {
    $(window).scroll(function () {
        $('.js-fadeRight').each(function () {
            var pos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > pos - windowHeight + 100) {
                $(this).addClass('scroll');
            }
        });
    });
});



var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};



'use strict';
{
    // アコーディオン
    // DOM取得
    const parent = document.querySelectorAll('.js-faq_parent');
    console.log(parent);

    // イベント
    for (let i = 0; i < parent.length; i++) {
        // clickイベントを付加
        parent[i].addEventListener('click', accodionToggle);
    }

    // 処理
    function accodionToggle(e) {
        // クリックした要素にクラスを付加
        e.currentTarget.classList.toggle('is-open');
        // クリックした要素の兄弟要素を取得
        const child = e.currentTarget.nextElementSibling;
        //　兄弟要素にクラスを付加
        child.classList.toggle('is-open');
    }
}


$(window).scroll(function () {
    var pos = 800; // ①上からの距離(px)で指定する場合
    var pos = document.body.clientHeight / 3; // ②上からの割合(%)で指定する場合
    if ($(this).scrollTop() > pos) {
        $('.banner').fadeIn();
    } else {
        $('.banner').fadeOut();
    }
});