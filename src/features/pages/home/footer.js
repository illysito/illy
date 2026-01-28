import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function footer() {
  function isMobile() {
    return window.innerWidth <= 767
  }

  const footerHeadings = document.querySelectorAll('.footer-h')
  const footerImgs = document.querySelectorAll('.footer-img')

  let scrollStart
  let scrollEnd
  if (isMobile()) {
    scrollStart = 'top bottom'
    scrollEnd = 'top 95%'
    delay = 0
  } else {
    delay = 0.1
    scrollStart = 'top 90%'
    scrollEnd = 'top 60%'
  }

  // reveal footer text
  footerHeadings.forEach((h) => {
    gsap.to(h, {
      yPercent: 100,
      opacity: 1,
      scrollTrigger: {
        trigger: h,
        start: scrollStart,
        end: scrollEnd,
        markers: false,
      },
    })
  })

  // reveal footer images
  gsap.to(footerImgs, {
    opacity: 1,
    stagger: -0.08,
    duration: 1.2,
    scrollTrigger: {
      trigger: footerImgs[0],
      start: scrollStart,
      end: scrollEnd,
      markers: false,
    },
  })

  // hover on footer links
  footerHeadings.forEach((h, index) => {
    if (index == 3 || index == 5) return

    const wrapper = h.parentElement
    h.addEventListener('mouseover', () => {
      gsap.to(wrapper, {
        duration: 0.6,
        x: 8,
        opacity: 0.8,
      })
    })
    h.addEventListener('mouseleave', () => {
      gsap.to(wrapper, {
        duration: 0.6,
        x: 0,
        opacity: 1,
      })
    })
  })
}

export default footer
