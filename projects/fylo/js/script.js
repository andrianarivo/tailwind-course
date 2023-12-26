document.addEventListener('DOMContentLoaded', function() {
  const themeToggleBtn = document.querySelector('#theme-toggle');
  const themeToggleDarkIcon = document.querySelector('#theme-toggle-dark-icon');
  const themeToggleLightIcon = document.querySelector('#theme-toggle-light-icon');

  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    // Show light icon
    themeToggleLightIcon.classList.remove('hidden');
  } else {
    // Show dark icon
    themeToggleDarkIcon.classList.remove('hidden');
  }

  themeToggleBtn.addEventListener('click', toggleMode)

  function toggleMode() {
    // Toggle Icon
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // If is set in localstorage
    if(localStorage.getItem('color-theme')) {
      if(localStorage.getItem('color-theme') === 'light') {
        // If light, make dark and save in localstorage
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }
    } else {
      // If not in localstorage
      if(document.documentElement.classList.contains('dark')) {
        // If dark, make light and save in localstorage
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }

  }
})