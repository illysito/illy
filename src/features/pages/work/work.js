import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'

import Anim from '../../helpers/anim.js'

const D = Anim.D
const E = Anim.E

// import SplitType from 'split-type'

// gsap.registerPlugin(ScrollTrigger)

async function workPage() {
  function isMobile() {
    return window.innerWidth <= 767
  }

  function domQuery() {
    return {
      filterWrappers: document.querySelectorAll('.work-filter-wrapper'),
      filters: document.querySelectorAll('.work-filter'),
      underscores: document.querySelectorAll('.underscore'),
      filterLines: document.querySelectorAll('.filter-line'),
      workRows: document.querySelectorAll('.work-row'),
      workLines: document.querySelectorAll('.work-line'),
      mousetrackedImgWrapper: document.querySelector(
        '.mousetracked-img-wrapper'
      ),
      mousetrackedImgs: document.querySelectorAll('.mousetracked-img'),
      rowsWrapper: document.querySelector('.rows-wrapper'),
    }
  }
  const DOM = domQuery()

  let state = 'all'
  let states = ['all', 'is--selected', 'is--web', 'is--graphic'] // [all, selected, web, graphic]

  // underscores
  gsap.to(DOM.underscores, {
    opacity: 0,
    duration: 0.6,
    repeat: -1,
    ease: 'power4.inOut',
    yoyo: true,
  })

  // click (visual)
  function animateClick(index) {
    // lines
    DOM.filterLines.forEach((line, i) => {
      if (i == index) {
        gsap.to(line, {
          opacity: 1,
          width: '100%',
          duration: 0.6,
          ease: 'power2.out',
        })
      } else {
        gsap.to(line, {
          width: '0%',
          opacity: 0.5,
          duration: 0.6,
          ease: 'power2.out',
        })
      }
    })
    // type
    DOM.filters.forEach((filter, i) => {
      let realIndex = 0
      if (i == 0 || i == 1) {
        // "all" clicked
        realIndex = 0
      } else if (i == 2 || i == 3) {
        // "selected" clicked
        realIndex = 1
      } else if (i == 4 || i == 5) {
        // "web" clicked
        realIndex = 2
      } else {
        // "graphic" clicked
        realIndex = 3
      }
      if (realIndex == index) {
        gsap.to(filter, {
          opacity: 1,
          fontVariationSettings: '"wght" 400',
          duration: 0.6,
          ease: 'power2.out',
          onComplete: () => {
            filter.classList.add('is--clicked')
            // console.log(filter.classList)
          },
        })
      } else {
        gsap.to(filter, {
          opacity: 0.5,
          duration: 0.6,
          fontVariationSettings: '"wght" 250',
          ease: 'power2.out',
          onComplete: () => {
            filter.classList.remove('is--clicked')
            // console.log(filter.classList)
          },
        })
      }
    })
  }

  // click (filtering)
  function filterWork() {
    // hide rows & lines
    gsap.to(DOM.workRows, {
      opacity: 0,
      stagger: -0.05,
      duration: D.slow,
      ease: E.p2io,
    })
    gsap.to(DOM.workLines, {
      opacity: 0,
      stagger: -0.05,
      duration: D.slow,
      ease: E.p2io,
      onComplete: () => {
        // evaluate state and decide which filter to activate
        DOM.workRows.forEach((row) => {
          // toggle by tag
          if (!row.classList.contains(state)) {
            row.style.display = 'none'
          } else {
            row.style.display = 'flex'
          }
          // display all if all
          if (state === 'all') {
            row.style.display = 'flex'
          }
        })
        DOM.workLines.forEach((line) => {
          // toggle by tag
          if (!line.classList.contains(state)) {
            line.style.display = 'none'
          } else {
            line.style.display = 'flex'
          }
          // display all if all
          if (state === 'all') {
            line.style.display = 'flex'
          }
        })

        // reanimate rows & lines
        gsap.to(DOM.workRows, {
          delay: 0.2,
          opacity: 1,
          stagger: 0.05,
          duration: D.slow,
          ease: E.p2io,
        })
        gsap.to(DOM.workLines, {
          delay: 0.2,
          opacity: 1,
          stagger: 0.05,
          duration: D.slow,
          ease: E.p2io,
        })
      },
    })
  }

  // hover on filters
  let isClicked = false

  DOM.filterWrappers.forEach((filter, index) => {
    const line = filter.firstElementChild

    const wrapper = line.nextElementSibling
    const text = wrapper.firstElementChild
    const textHidden = text.nextElementSibling

    if (!isMobile()) {
      filter.addEventListener('mouseenter', () => {
        gsap.to(line, {
          width: '100%',
          duration: 0.6,
          ease: 'power2.out',
        })
        gsap.to([text, textHidden], {
          yPercent: -100,
          duration: D.med,
          ease: E.eio,
        })
      })

      filter.addEventListener('mouseleave', () => {
        if (isClicked) {
          isClicked = false
          return
        } else if (!text.classList.contains('is--clicked')) {
          gsap.to(line, {
            width: '0%',
            duration: 0.6,
            ease: 'power2.out',
          })
          gsap.to([text, textHidden], {
            yPercent: 0,
            duration: D.med,
            ease: E.eio,
          })
        }
      })
    }

    filter.addEventListener('click', () => {
      isClicked = true
      animateClick(index)
      // assign state
      state = states[index]
      console.log(state)
      filterWork()
    })
  })

  // hover on rows
  DOM.workRows.forEach((row, index) => {
    const textWrapper = row.firstElementChild
    const arrowWrapper = textWrapper.nextElementSibling
    const overflowHidden = textWrapper.firstElementChild
    const text = overflowHidden.firstElementChild
    const textHidden = text.nextElementSibling
    const underscore = text.firstElementChild

    if (!isMobile()) {
      row.addEventListener('mouseenter', () => {
        const rootStyles = getComputedStyle(document.documentElement)
        const accent = rootStyles.getPropertyValue('--accent').trim()
        gsap.to([text, textHidden], {
          color: accent,
          duration: D.med,
          ease: E.p2io,
        })
        gsap.to(overflowHidden, {
          x: 16,
          duration: D.med,
          ease: E.p2io,
        })
        gsap.to(underscore, {
          color: accent,
          duration: D.med,
          ease: E.eio,
        })
        if (arrowWrapper) {
          gsap.to(arrowWrapper, {
            opacity: 1,
            x: 16,
            duration: D.med,
            ease: E.p2io,
          })
        }
        DOM.mousetrackedImgs.forEach((img, i) => {
          gsap.set(img, {
            opacity: 0,
          })
          if (index === i) {
            gsap.set(img, {
              opacity: 1,
            })
          }
        })
      })

      row.addEventListener('mouseleave', () => {
        const rootStyles = getComputedStyle(document.documentElement)
        const typeColor = rootStyles.getPropertyValue('--type-color').trim()
        // const typeColorComp = rootStyles
        //   .getPropertyValue('--type-color-comp')
        //   .trim()

        // gsap.to(row, {
        //   backgroundColor: typeColorComp,
        //   duration: D.fast,
        //   ease: 'power2.out',
        // })
        gsap.to([text, textHidden], {
          color: typeColor,
          x: 0,
          duration: D.med,
          ease: E.p2io,
        })
        gsap.to(overflowHidden, {
          x: 0,
          duration: D.med,
          ease: E.p2io,
        })
        gsap.to(underscore, {
          color: typeColor,
          duration: D.med,
          ease: E.eio,
        })
        if (arrowWrapper) {
          gsap.to(arrowWrapper, {
            opacity: 0,
            x: 0,
            duration: D.med,
            ease: E.p2io,
          })
        }
      })
    }
  })

  // mousetracking
  let mouseX = 0
  let mouseY = 0
  let prevMouseX = 0
  let prevMouseY = 0

  let dirX = 0
  let dirY = 0

  let targetX = 0
  let targetY = 0
  let speed = 0.2

  function moveImg() {
    targetX += (mouseX - targetX) * speed
    targetY += (mouseY - targetY) * speed

    DOM.mousetrackedImgWrapper.style.left = `${targetX - 160}px`
    DOM.mousetrackedImgWrapper.style.top = `${targetY - (160 * 5) / 4}px`

    gsap.to(DOM.mousetrackedImgs, {
      x: dirX,
      y: dirY,
      duration: 1.2,
    })
    requestAnimationFrame(moveImg)
  }
  moveImg()

  window.addEventListener('mousemove', (e) => {
    prevMouseX = mouseX
    prevMouseY = mouseY

    mouseX = e.clientX
    mouseY = e.clientY + window.scrollY

    dirX = mouseX - prevMouseX
    dirY = mouseY - prevMouseY
  })

  DOM.rowsWrapper.addEventListener('mouseover', () => {
    gsap.to(DOM.mousetrackedImgWrapper, {
      opacity: 1,
      duration: D.fast,
      ease: E.p2io,
    })
  })
  DOM.rowsWrapper.addEventListener('mouseleave', () => {
    gsap.to(DOM.mousetrackedImgWrapper, {
      opacity: 0,
      duration: D.fast,
      ease: E.p2io,
    })
  })
}

export default workPage
