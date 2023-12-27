document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab')
  const panels = document.querySelectorAll('.panel')

  const btn = document.querySelector('#menu-btn')
  const menu = document.querySelector('#menu')
  const logo = document.querySelector('#logo')

  btn.addEventListener('click', navToggle)

  // Tabs menu event listener
  tabs.forEach((tab) => {
    tab.addEventListener('click', onTabClick)
  })

  function onTabClick(e) {
    // Deactivate all tabs
    tabs.forEach((tab) => {
      tab.classList.remove('border-b-4')
    })

    // Hide all panels
    panels.forEach((panel) => {
      panel.classList.add('hidden')
    })

    // Activate a new tab and panel based on the target
    e.target.classList.add('border-b-4')
    const classString = e.target.getAttribute('data-target')
    const panel = document.querySelector(`.${classString}`)
    panel.classList.remove('hidden')
    panel.classList.add('flex')
  }

  function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')

    if(menu.classList.contains('flex')) {
      logo.setAttribute('src', './images/logo-bookmark-footer.svg')
    } else {
      logo.setAttribute('src', './images/logo-bookmark.svg')
    }
  }
})