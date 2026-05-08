/* ================================================
   MAIN.JS — PrimeCuts Barbershop
================================================ */

import './components/navbar.js'

/* ------------------------------------------------
   Hero — animação de entrada
------------------------------------------------ */

// Observação: este arquivo usa imports (module). O index.html deve carregar como <script type="module">.
// Se por algum motivo for carregado em contexto incorreto, falhamos cedo para facilitar o debug.
if (typeof document === 'undefined') {
  throw new Error('PrimeCuts: main.js precisa de um contexto DOM.');
}

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

/* ------------------------------------------------
   Init
------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  initHero()
})
