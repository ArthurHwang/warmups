const $eventDelegation = document.querySelector('[data-view="pokedex"]')

$eventDelegation.addEventListener('click', (e) => {
  let x = (e.target.closest('[data-number]'));
  console.log(x.getAttribute('data-number'));
});
