document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('#menu-btn')
  const menu = document.querySelector('#menu')

  const input = document.querySelector('#link-input')
  const linkForm = document.querySelector('#link-form')
  const errMsg = document.querySelector('#err-msg')

  btn.addEventListener('click', navToggle)
  linkForm.addEventListener('submit', formSubmit)

  function formSubmit(e) {
    e.preventDefault()

    if(input.value === '') {
      errMsg.innerHTML = 'Please add a link'
      input.classList.add('border-red')
    } else if(!validURL(input.value)) {
      errMsg.innerHTML = 'Please add a valid URL'
      input.classList.add('border-red')
    } else {
      errMsg.innerHTML = ''
      input.classList.remove('border-red')
      alert('Link added successfully')
    }
  }

  function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    )
    return !!pattern.test(str)
  }

  function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
  }
})