

TweenMax.to('.closing__btn', 0.6, {
	scale: 1.1,
	repeat: -1,
	yoyo: true
});

//anim
let anim = document.querySelectorAll('[data-anim="true"]');
let img = document.querySelectorAll('[data-src]');
const header = document.querySelector('.header');
const mv = document.querySelector('.mv');
const closing = document.querySelector('.closing');
const floatBtn = document.querySelector('.fixed-btn');

window.addEventListener(
	"scroll",
	e => {
		anim.forEach((item) => {
			const rectTop = item.getBoundingClientRect().top;
			if ( rectTop < window.innerHeight * 0.9 && rectTop > 0 ) {
				TweenMax.fromTo(item, 0.6, {
					opacity: 0,
					y: 100
				}, {
					opacity: 1,
					y: 0
				});
				item.dataset.anim = false;
				anim = document.querySelectorAll('[data-anim="true"]');
			}
		});
		//lazy load
		img.forEach((item) => {
			const rectTop = item.getBoundingClientRect().top;
			if ( rectTop < window.innerHeight * 0.9 && rectTop > 0 ) {
				const src = item.dataset.src;
				item.setAttribute("src", src);
				item.removeAttribute("data-src");
				img = document.querySelectorAll('[data-src]');
				imagesLoaded( item , instance => {
					TweenMax.fromTo(item, 0.6, {
						opacity: 0,
						y: 100
					}, {
						opacity: 1,
						y: 0
					});
				});
			}
		});

		if ( window.pageYOffset > mv.clientHeight + closing.clientHeight ) {
			floatBtn.dataset.active = true;
		} else {
			floatBtn.dataset.active = false;
		}

	}
);


//anchor
const anchor = document.querySelectorAll('a');

anchor.forEach((item) => {
	item.addEventListener(
    "click",
    event => {
			if ( item.getAttribute('href').indexOf('#') > -1 ) {
				event.preventDefault();
				const id = item.getAttribute('href');
				const target = document.querySelector(id);
				// 画面上部から要素までの距離
				const rectTop = target.getBoundingClientRect().top;
				// 現在のスクロール距離
				const offsetTop = window.pageYOffset;
				// スクロール位置に持たせるバッファ
				const buffer = 100;
				const top = rectTop + offsetTop - buffer;
				window.scrollTo({
				  top,
				  behavior: "smooth"
				});
				return false;
			}
    },
    false
  );
});
