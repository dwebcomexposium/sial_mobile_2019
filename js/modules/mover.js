const target = document.querySelector('body');
const observer = new MutationObserver(() => {
  if(document.querySelector('.evd-wrapper > .block') & document.querySelector('.evd-wrapper > .evd-desc') & document.querySelector('.evd-wrapper > .evd-desc > .evd-desc')) {
    const baneer = document.querySelector('.evd-wrapper > .block')
    const desc = document.querySelector('.evd-wrapper > .evd-desc')
    const child = document.querySelector('.evd-wrapper > .evd-desc > .evd-desc')
    desc.insertBefore(baneer, child)
  }
});
const config = { childList: true };
observer.observe(target, config);