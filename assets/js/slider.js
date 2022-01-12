function Slider(slider, wrapper) {

  const _slider = document.querySelector(slider);
  const _wrapper = document.querySelector(wrapper);

  function init() {
    addSlideEvents();
  }

  function onStart(event) {
    event.preventDefault();
    _wrapper.addEventListener('mousemove', onMove);
  }

  function onMove(event) {
  }

  function onEnd(event) {
    _wrapper.removeEventListener('mousemove', onMove);
  }

  function addSlideEvents() {
    _wrapper.addEventListener('mousedown', onStart);
    _wrapper.addEventListener('mouseup', onEnd);
  }

  return {
    slider: _slider,
    wrapper: _wrapper,
    init: init,
  };
}

const slider = Slider('.slider__items', '.slider__wrapper');
slider.init();