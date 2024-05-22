const $myFragment = document.createDocumentFragment();

for (let i = 0; i < 5000; i++) {
  const $div = document.createElement('div');
  $div.textContent = `Item numero ${i}`;
  $myFragment.appendChild($div);
}

document.body.appendChild($myFragment);