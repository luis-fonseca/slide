function Slider(slider, wrapper) {

  const _slider = document.querySelector(slider);
  const _wrapper = document.querySelector(wrapper);

  /**
   * finalPosition: salva o valor de movePosition assim que o usuário
   * soltar o botão de mouse.
   * movePosition: salva a distância percorrida pelo slider ao ser
   * arrastado com o mouse. Caso isso não seja feito, a posição do slider
   * sempre será reiniciada.
   */
  const _distance = { finalPosition: 0, startX: 0, movement: 0, movePosition: 0 };

  function init() {
    addSlideEvents();
  }

  function onStart(event) {
    event.preventDefault();
    _distance.startX = event.clientX;
    _wrapper.addEventListener('mousemove', onMove);
  }

  function onMove(event) {
    const finalPosition = updatePosition(event.clientX);
    moveSlider(finalPosition);
  }

  function onEnd(event) {
    _wrapper.removeEventListener('mousemove', onMove);
    _distance.finalPosition = _distance.movePosition;
  }

  function addSlideEvents() {
    _wrapper.addEventListener('mousedown', onStart);
    _wrapper.addEventListener('mouseup', onEnd);
  }

  function updatePosition(clientX) {
    _distance.movement = (_distance.startX - clientX) * 1.6;
    return (_distance.finalPosition - _distance.movement);
  }

  function moveSlider(distanceX) {
    _distance.movePosition = distanceX;
    _slider.style.transform = `translate3d(${distanceX}px, 0, 0)`;
  }

  return {
    slider: _slider,
    wrapper: _wrapper,
    init: init,
  };
}

const slider = Slider('.slider__items', '.slider__wrapper');
slider.init();