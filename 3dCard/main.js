const cards = document.querySelectorAll('.card');
for( let i = 0; i < cards.length; i++) {
	const card = cards[i];
	card.addEventListener('mouseMove' , startRotate);
	card.addEventListener('mouseOut' , stopRotate);
}

function startRotate (event) {
	const cardItem = this.querySelection('card-item');
	const halfHeight = cardItem.offsetHeight/2;
	const halfWidth = cardItem.offsetWidth/2;
	cardItem.innerText = event.offsetX+ ' ' +event.offsetY;
	cardItem.style.transform = 'rotateX('+-(event.offsetY - halfHeight)/10+'deg) rotateY(' + - (event.offsetX - halfWidth) / 5 + 'deg)';
}

function stopRotate(event) {
	const cardItem = this.querySelector('card-item');
	card.style.transform = 'rotate(0)'