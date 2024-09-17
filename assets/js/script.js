// adjust width kotak tipis on scroll
window.addEventListener('scroll', function () {
  const elements = document.querySelectorAll('.kotak-tipis');
  const windowCenter = window.scrollY + window.innerHeight / 2;

  elements.forEach((element) => {
    const elementTop = element.offsetTop;
    const elementHeight = element.offsetHeight;
    const elementCenter = elementTop + elementHeight / 2;

    const distance = Math.abs(windowCenter - elementCenter);

    let newWidth = 100 - (distance / window.innerHeight) * 100;
    if (newWidth < 30) newWidth = 30;
    if (newWidth > 100) newWidth = 100;

    element.style.width = newWidth + '%';
  });
});
