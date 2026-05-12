import './components/navbar.js'

// Requer DOM (carregado como module).
if (typeof document === 'undefined')
  throw new Error('PrimeCuts: main.js precisa de um contexto DOM.')

function initHero() {
  const heroText = document.querySelector('.hero__text')
  const heroImage = document.querySelector('.hero__image-wrapper')

  if (!heroText || !heroImage) return

  // Pequeno delay pra garantir que o CSS carregou
  requestAnimationFrame(() => {
    setTimeout(() => {
      heroText.classList.add('is-visible')
      heroImage.classList.add('is-visible')
    }, 100)
  })
}

function initServiceCardsReveal() {
  const cards = document.querySelectorAll('.service-card')
  if (!cards || cards.length === 0) return

  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  if (reduceMotion) {
    cards.forEach((card) => card.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    },
    {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0,
    },
  )

  cards.forEach((card) => observer.observe(card))
}

document.addEventListener('DOMContentLoaded', () => {
  initHero()
  initServiceCardsReveal()
})
