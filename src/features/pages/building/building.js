import gsap from 'gsap'

function building() {
  let isMobile = window.innerWidth <= 767

  const socialLinks = document.querySelectorAll('.social-link')

  if (!isMobile) {
    socialLinks.forEach((l) => {
      l.addEventListener('mouseover', (e) => {
        const link = e.currentTarget
        gsap.to(link, {
          scale: 0.9,
          opacity: 0.6,
          duration: 0.1,
          ease: 'none',
        })
      })
      l.addEventListener('mouseleave', (e) => {
        const link = e.currentTarget
        gsap.to(link, {
          scale: 1,
          opacity: 1,
          duration: 0.1,
          ease: 'none',
        })
      })
    })
  }
}

export default building
