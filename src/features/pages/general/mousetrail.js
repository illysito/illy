// import gsap from 'gsap'

function mousetrail() {
  // create mouse ball
  const ball = document.createElement('div')
  ball.classList.add('mouse-ball')
  const OFFSET = 8

  document.body.appendChild(ball)

  let currentX = 0
  let currentY = 0
  let targetX = 0
  let targetY = 0

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX
    targetY = e.pageY
  })

  function animate() {
    currentX += (targetX - currentX) * 0.1
    currentY += (targetY - currentY) * 0.1

    ball.style.left = `${currentX - OFFSET}px`
    ball.style.top = `${currentY - OFFSET}px`

    requestAnimationFrame(animate)
  }
  animate()
}

export default mousetrail
