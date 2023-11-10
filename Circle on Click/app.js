const circleContainerEl = document.querySelector('.circleContainer')

function makeCircle(event){
    // console.log('click')
    // console.log('event:', event)
    const circle = document.createElement('div')
    circle.classList.add('circle')

    circle.style.left = event.pageX - circle.offsetWidth / 2 + 'px';
    // console.log('circle offset width:', circle.offsetWidth)
    circle.style.top = event.pageY - circle.offsetHeight / 2  + 'px';
    // console.log('circle offset Height:', circle.offsetHeight)


    circleContainerEl.appendChild(circle)
}

circleContainerEl.addEventListener('click', makeCircle)

