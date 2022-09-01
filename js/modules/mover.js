const moveElements = () => {
  console.log('.js called')
  const baneer = document.querySelector('.evd-wrapper .block')
  const desc = document.querySelector('.evd-desc')
  desc.appendChild(baneer)
}

moveElements()