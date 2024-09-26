const resizeImage = () => {
  const sliderInp = document.querySelector(".slider__input");
  const sliderImg = document.querySelector(".slider__image");

  const minSize = 50;
  const maxSize = 500;

  const newSize = minSize + (sliderInp.value / 100) * (maxSize - minSize);

  sliderImg.style.width = `${newSize}px`;
};

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const sliderInp = document.querySelector(".slider__input");
sliderInp.addEventListener("input", debounce(resizeImage, 100));

const box = document.getElementById("box");

const updateBoxPosition = _.debounce((event) => {
  const x = event.clientX - box.offsetWidth / 2;
  const y = event.clientY - box.offsetHeight / 2;

  box.style.transform = `translate(${x}px, ${y}px)`;
}, 100);

const onMouseMove = (event) => {
  updateBoxPosition(event);
};

const onMouseDown = () => {
  document.addEventListener("mousemove", onMouseMove);
};

const onMouseUp = () => {
  document.addEventListener("mousemove", onMouseMove);
};

box.addEventListener("mousedown", onMouseDown);
document.addEventListener("mouseup", onMouseUp);
