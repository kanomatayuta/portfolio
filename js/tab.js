window.addEventListener("load", function () {

  /*----------------------------
  *workタブメニュークリック時切り替え
  *----------------------------*/
  const tabTriggers = document.querySelectorAll('.js-tab');
  const tabTargets = document.querySelectorAll('.post');

  for (let count = 0; count < tabTriggers.length; count++)
  {
    tabTriggers[count].addEventListener('click', (e) => {
      const currentMenu = e.currentTarget;
      const currentContent = document.getElementById(currentMenu.dataset.id);
      for (let count = 0; count < tabTriggers.length; count++)
      {
        tabTriggers[count].classList.remove('active');
      }

      currentMenu.classList.add('active');

      for (let count = 0; count < tabTargets.length; count++)
      {
        tabTargets[count].classList.remove('active');
      }
      if (currentContent !== null)
      {
        currentContent.classList.add('active');
      }
    });
  }
});
