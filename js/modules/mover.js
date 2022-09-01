const moveElements = () => {
  const baneer = document.querySelector('.evd-wrapper .block')
  const desc = document.querySelector('.evd-wrapper > .evd-desc')
  const child = desc.querySelector('> .evd-desc')
  desc.insertBefore(baneer, child)
}

moveElements()