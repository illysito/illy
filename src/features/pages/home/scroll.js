import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function scroll() {
  const claimHeadings = document.querySelectorAll('.claim-h')
  const claimUnderscore = document.querySelector('.underscore.is--claim')
  const claimWrapper = document.querySelector('.claim-wrapper')
  const sectionLines = document.querySelectorAll('.line-outline')
  const serviceLines = document.querySelectorAll('.service-line')
  const headers = document.querySelectorAll('.header__info')
  const separationHeaders = document.querySelectorAll('.separation-h')
  const hireButton2 = document.querySelector('.hire-button-2')
  const workButton = document.querySelector('.work-button')
  const labButton = document.querySelector('.lab-button')
  const aboutP = document.querySelector('.about-type-p')

  // hero claim
  claimHeadings.forEach((h, index) => {
    gsap.to(h, {
      yPercent: 100,
      scrollTrigger: {
        trigger: claimWrapper,
        start: `top ${20 + index * 2}%`,
        end: 'top 8%',
        markers: false,
        scrub: 1,
      },
    })
  })
  gsap.to(claimUnderscore, {
    yPercent: 100,
    scrollTrigger: {
      trigger: claimWrapper,
      start: `top 20%`,
      end: 'top 8%',
      markers: false,
      scrub: 1,
    },
  })

  const aboutSection = document.querySelector('.about__section')

  // parallax
  gsap.to(aboutSection, {
    y: 80,
    scrollTrigger: {
      trigger: aboutSection,
      start: `top 98%`,
      markers: false,
      scrub: 1,
    },
  })

  // line reveal horizontal
  sectionLines.forEach((l) => {
    gsap.set(l, { width: 0 })

    gsap.to(l, {
      duration: 1.2,
      width: '100%',
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: l,
        start: 'top 90%',
        end: 'top 60%',
      },
    })
  })
  serviceLines.forEach((l) => {
    gsap.set(l, { width: 0 })

    gsap.to(l, {
      duration: 1.2,
      width: '100%',
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: l,
        start: 'top 90%',
        end: 'top 60%',
      },
    })
  })
  headers.forEach((h) => {
    gsap.set(h, { opacity: 0 })

    gsap.to(h, {
      duration: 1.2,
      opacity: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: h,
        start: 'top 90%',
        end: 'top 60%',
      },
    })
  })

  // separation headers reveal
  separationHeaders.forEach((h) => {
    gsap.to(h, {
      duration: 1,
      yPercent: 100,
      opacity: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: h,
        start: 'top 90%',
        end: 'top 60%',
        markers: false,
      },
    })
  })

  // things that reveal through opacity like buttons or some txt
  gsap.to(aboutP, {
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: aboutP,
      start: 'top 90%',
      end: 'top 60%',
      markers: false,
    },
  })

  gsap.to(hireButton2, {
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: hireButton2,
      start: 'top 90%',
      end: 'top 80%',
      markers: false,
    },
  })
  gsap.to(workButton, {
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: workButton,
      start: 'top 90%',
      end: 'top 80%',
      markers: false,
    },
  })
  gsap.to(labButton, {
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: labButton,
      start: 'top 90%',
      end: 'top 80%',
      markers: false,
    },
  })
}

export default scroll
