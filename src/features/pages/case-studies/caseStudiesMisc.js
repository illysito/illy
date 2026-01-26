import gsap from 'gsap'

async function caseStudiesMisc() {
  function domQuery() {
    return {
      underscores: document.querySelectorAll('.underscore'),
    }
  }
  const DOM = domQuery()

  // underscores
  gsap.to(DOM.underscores, {
    opacity: 0,
    duration: 0.6,
    repeat: -1,
    ease: 'power4.inOut',
    yoyo: true,
  })
}

export default caseStudiesMisc
