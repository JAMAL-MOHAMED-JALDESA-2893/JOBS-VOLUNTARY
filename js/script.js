// Pages
document.querySelectorAll('.logo').forEach(logo => {
  logo.addEventListener('click', () => {
      document.querySelector('.front-page').style.display = 'block'
      document.querySelector('.login-page').style.display = 'none'
      document.querySelector('.signup-page').style.display = 'none'
  })
})



// Navigation
const dropdownItems = document.querySelectorAll('.dropdown-hover')

if(window.innerWidth < 1000) {
  const menuIcon = document.querySelector('.menu')
  const navbar = document.querySelector('.navbar')
  
  menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('change')
  })

  document.querySelectorAll('.show-dropdown').forEach(link => {
      link.addEventListener('click', () => {
          link.nextElementSibling.style.left = '0'
      })
  })

}

window.addEventListener('resize', () => {
  window.location.reload()
})

// End of Navigation