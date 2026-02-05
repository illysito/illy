import gsap from 'gsap'

async function catanPreloader() {
  const preloader = document.querySelector('.catan-preloader')
  const imgs = document.querySelectorAll('.resource-img')

  const tl = gsap.timeline()

  tl.set(imgs, {
    delay: 0.8,
    opacity: 0,
  }).set(imgs[1], {
    opacity: 1,
  })
  tl.set(
    imgs,
    {
      opacity: 0,
    },
    '<0.3'
  ).set(imgs[2], {
    opacity: 1,
  })
  tl.set(
    imgs,
    {
      opacity: 0,
    },
    '<0.3'
  ).set(imgs[3], {
    opacity: 1,
  })
  tl.set(
    imgs,
    {
      opacity: 0,
    },
    '<0.3'
  ).set(imgs[4], {
    opacity: 1,
  })
  tl.to(
    imgs,
    {
      opacity: 0,
      duration: 0,
      onComplete: () => {
        gsap.to(preloader, {
          delay: 0.3,
          opacity: 0,
          duration: 1.6,
          onComplete: () => {
            gsap.to(preloader, {
              zIndex: -30,
              duration: 0,
            })
          },
        })
      },
    },
    '<0.3'
  )
}

export default catanPreloader
