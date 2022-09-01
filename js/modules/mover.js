const target = document.querySelector('.evd-wrapper > .evd-desc');
const observer = new MutationObserver(() => {
  const baneer = document.querySelector('.evd-wrapper .block')
  const desc = document.querySelector('.evd-wrapper > .evd-desc')
  const child = document.querySelector('.evd-wrapper > .evd-desc > .evd-desc')
  desc.insertBefore(baneer, child)
});
const config = { childList: true };
observer.observe(target, config);