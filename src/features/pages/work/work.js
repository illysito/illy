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
  DOM.workRows.forEach((row) => {
    const textWrapper = row.firstElementChild
    const overflowHidden = textWrapper.firstElementChild
    const text = overflowHidden.firstElementChild
    const textHidden = text.nextElementSibling

    if (!isMobile()) {
      row.addEventListener('mouseenter', () => {
        // const rootStyles = getComputedStyle(document.documentElement)
        // const typeColor = rootStyles.getPropertyValue('--type-color').trim()
        // const typeColorComp = rootStyles
        //   .getPropertyValue('--type-color-comp')
        //   .trim()
        // gsap.to(row, {
        //   backgroundColor: typeColor,
        //   duration: D.fast,
        //   ease: 'power2.out',
        // })
        gsap.to([text, textHidden], {
          // color: typeColorComp,
          yPercent: -100,
          duration: D.med,
          ease: E.eio,
        })
      })

      row.addEventListener('mouseleave', () => {
        // const rootStyles = getComputedStyle(document.documentElement)
        // const typeColor = rootStyles.getPropertyValue('--type-color').trim()
        // const typeColorComp = rootStyles
        //   .getPropertyValue('--type-color-comp')
        //   .trim()

        // gsap.to(row, {
        //   backgroundColor: typeColorComp,
        //   duration: D.fast,
        //   ease: 'power2.out',
        // })
        gsap.to([text, textHidden], {
          // color: typeColor,
          yPercent: 0,
          duration: D.med,
          ease: E.eio,
        })
      })
    }
  })
}

export default workPage
