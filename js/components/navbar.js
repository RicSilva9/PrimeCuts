/* ================================================
   NAVBAR — scroll effect + menu mobile
================================================ */

const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.navbar__hamburger')
const mobileMenu = document.querySelector('.navbar__mobile')
const mobileLinks = document.querySelectorAll(
  '.navbar__mobile .navbar__link, .navbar__mobile .btn',
)
const navLinks = document.querySelectorAll('.navbar__link')

/* ------------------------------------------------
   Efeito de scroll
------------------------------------------------ */
function handleScroll() {
  const isScrolled = window.scrollY > 50
  navbar.classList.toggle('is-scrolled', isScrolled)
}

window.addEventListener('scroll', handleScroll, { passive: true })

// Roda uma vez ao carregar caso a página já esteja rolada
handleScroll()

/* ------------------------------------------------
   Menu mobile — abrir / fechar
------------------------------------------------ */
function openMenu() {
  hamburger.classList.add('is-open')
  mobileMenu.classList.add('is-open')
  hamburger.setAttribute('aria-expanded', 'true')
  mobileMenu.setAttribute('aria-hidden', 'false')
  // Trava o scroll do body enquanto menu está aberto
  document.body.style.overflow = 'hidden'
}

function closeMenu() {
  hamburger.classList.remove('is-open')
  mobileMenu.classList.remove('is-open')
  hamburger.setAttribute('aria-expanded', 'false')
  mobileMenu.setAttribute('aria-hidden', 'true')
  document.body.style.overflow = ''
}

function toggleMenu() {
  const isOpen = hamburger.classList.contains('is-open')
  isOpen ? closeMenu() : openMenu()
}

hamburger.addEventListener('click', toggleMenu)

const closeBtn = document.querySelector('.navbar__mobile-close')
if (closeBtn) {
  closeBtn.addEventListener('click', closeMenu)
}

// Fecha ao clicar em qualquer link do menu mobile
mobileLinks.forEach((link) => {
  link.addEventListener('click', closeMenu)
})

// Fecha ao pressionar ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu()
})

/* ------------------------------------------------
   Active link — destaca link da seção visível
------------------------------------------------ */
const sections = document.querySelectorAll('section[id]')

const observerOptions = {
  root: null,
  rootMargin: '-40% 0px -55% 0px',
  threshold: 0,
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return

    navLinks.forEach((link) => {
      const href = link.getAttribute('href')
      const isActive = href === `#${entry.target.id}`
      link.classList.toggle('is-active', isActive)
    })
  })
}, observerOptions)

sections.forEach((section) => observer.observe(section))

