window.addEventListener("load", function () {

  /*----------------------------
  * スクロール時のヘッダー部分の実装
  *----------------------------*/
  // sns target
  window.addEventListener('scroll', function () {
    const triggerNav = document.getElementById('js-target');
    const scrollY = window.pageYOffset;
    const trigger = document.getElementById('follow__area');
    const triggerClientRect = trigger.getBoundingClientRect().top;
    const triggerY = scrollY + triggerClientRect;
    if (scrollY > triggerY)
    {
      triggerNav.classList.add('fixed');
    } else
    {
      triggerNav.classList.remove('fixed');
    }
  });

  //  work
  window.addEventListener('scroll', function () {
    const triggerWork = document.getElementById('js-worktarget');
    const trigger = document.getElementById('follow__area');
    const triggerwClientRect = trigger.getBoundingClientRect().top;
    const triggerWY = scrollY + triggerwClientRect;
    if (scrollY > triggerWY)
    {
      triggerWork.classList.add('fixed-wrk');
    } else
    {
      triggerWork.classList.remove('fixed-wrk');
    }
  });


  // 初めから表示
  const slideTarget = document.querySelectorAll('.pagetitle');
  for (let count = 0; count < slideTarget.length; count++)
  {
    slideTarget[count].classList.add('slide-in');
  }

  //  slide-in
  window.addEventListener('scroll', function () {
    const slideTarget = document.querySelectorAll('.sec-title');
    for (let count = 0; count < slideTarget.length; count++)
    {
      const rect = slideTarget[count].getBoundingClientRect().top;
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const offset = rect + scroll;
      const windowHeight = window.innerHeight;
      if (scroll > offset - windowHeight)
      {
        slideTarget[count].classList.add('slide-in');
      }
    }
  });

  // 初めから表示
  const fadeInTarget = document.querySelectorAll('.profile--img');
  for (let count = 0; count < fadeInTarget.length; count++)
  {
    fadeInTarget[count].classList.add('fade-in');
  }

  // fade-in
  window.addEventListener('scroll', function () {
    const fadeInTarget = document.querySelectorAll('.fade');
    // for文で要素一つ一つに対して繰り返し処理
    for (let count = 0; count < fadeInTarget.length; count++)
    {
      //ターゲットまでの位置を取得する
      const rect = fadeInTarget[count].getBoundingClientRect().top;
      // ドキュメントの左上からのスクロール量を取得(現在のスクロール量)
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      // ウィンドウからターゲットまでの距離を取得
      const offset = rect + scroll;
      // 現在のブラウザの高さを取得
      const windowHeight = window.innerHeight;
      //下にスクロール時ターゲットがウィンドウの高さまで達したら実行
      if (scroll > offset - windowHeight)
      {
        // class(.scroll-in)を追加
        fadeInTarget[count].classList.add('fade-in');
      }
    }
  });

  const PageTopBtn = document.querySelectorAll('.js-scroll-top');
  for (let count = 0; count < PageTopBtn.length; count++)
  {
    PageTopBtn[count].addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});