const selectColor = document.querySelector('.product__color');
const selectSize = document.querySelector('.product__size');

const choicesColor = new Choices(selectColor, {
  allowHTML: true,
});

const choicesSize = new Choices(selectSize, {
  allowHTML: true,
});
