import gsap from 'gsap'

function form() {
  const submitButton = document.querySelector('.submit-button')

  submitButton.addEventListener('mouseover', () => {
    gsap.to(submitButton, {
      borderRadius: 16,
      duration: 0.2,
      scale: 0.99,
    })
  })
  submitButton.addEventListener('mouseleave', () => {
    gsap.to(submitButton, {
      borderRadius: 8,
      duration: 0.2,
      scale: 1,
    })
  })
  submitButton.addEventListener('click', () => {
    gsap.to(submitButton, {
      duration: 0.1,
      scale: 0.98,
      onComplete: () => {
        gsap.to(submitButton, {
          scale: 0.99,
          duration: 0.1,
        })
      },
    })
  })
}

export default form
