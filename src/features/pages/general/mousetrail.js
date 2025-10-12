import gsap from 'gsap'

function mousetrail() {
  // create mouse ball
  const ball = document.createElement('div')
  // const customCursor = document.querySelector('.custom-cursor')
  // const links = document.querySelectorAll('a')
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

  document.addEventListener('pointerenter', () => {
    gsap.set([ball], {
      opacity: 1,
    })
  })
  document.addEventListener('pointerleave', () => {
    gsap.set([ball], {
      opacity: 0,
    })
  })

  // links.forEach((l) => {
  //   l.addEventListener('mouseenter', () => {
  //     gsap.set(customCursor, {
  //       opacity: 0,
  //     })
  //   })
  //   l.addEventListener('mouseleave', () => {
  //     gsap.set(customCursor, {
  //       opacity: 1,
  //     })
  //   })
  // })

  function animate() {
    currentX += (targetX - currentX) * 0.1
    currentY += (targetY - currentY) * 0.1

    ball.style.left = `${currentX - OFFSET}px`
    ball.style.top = `${currentY - OFFSET}px`

    // customCursor.style.left = `${targetX}px`
    // customCursor.style.top = `${targetY}px`

    requestAnimationFrame(animate)
  }
  animate()
}

export default mousetrail
