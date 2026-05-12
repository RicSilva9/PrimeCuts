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

document.addEventListener('DOMContentLoaded', () => {
  initHero()
})
