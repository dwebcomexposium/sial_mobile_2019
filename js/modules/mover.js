const moveElements = () => {
  const baneer = document.querySelector('.evd-wrapper .block')
  const desc = document.querySelector('.evd-wrapper > .evd-desc')
  const child = document.querySelector('.evd-wrapper > .evd-desc > .evd-desc')
  console.log(baneer, desc, child)
  desc.insertBefore(baneer, child)
}

moveElements()