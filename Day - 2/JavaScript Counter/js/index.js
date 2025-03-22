(function () {
  const buttons = document.querySelectorAll('.btn-counter');
  let count = 0;

  //     adding event listener and increase decrease function
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {

      if (button.classList.contains('decrease-btn')) {
        if (count > 0) count--;
      } else if (button.classList.contains('increase-btn')) {
        count++;
      }

      const counter = document.querySelector('.counter-number');
      counter.textContent = count;
    });
  });
})();
