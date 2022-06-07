let height = parseInt(window.innerHeight)
document.querySelector("#head").style.height = `${height / 8}px`
document.querySelector("#divBtnsAutt").style.height = `${height - parseInt(document.querySelector("#head").style.height.slice(0, -2))}px`