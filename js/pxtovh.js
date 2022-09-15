function pixelToVH(value) {
    return document.querySelector("#pixelToVH").innerHTML = `Result = ${(100 * value) / window.innerHeight}vh`;
  }
  function pixelToVW(value) {
    return document.querySelector("#pixelToVW").innerHTML = `Result = ${(100 * value) / window.innerWidth}vw`;
  }
  function vhToPixel(value) {
    return document.querySelector("#vhToPixel").innerHTML = `Result = ${(window.innerHeight * value) / 100}px`;
  }
  function vwToPixel(value) {
    return document.querySelector("#vwToPixel").innerHTML = `Result = ${((window.innerWidth * value) / 100)}px`;
  }

  window.addEventListener('resize', updateMeasurements)
  function updateMeasurements() {
    const pixelToVHValue = document.querySelector('.pixelToVH').value
    const pixelToVWValue = document.querySelector('.pixelToVW').value
    const vhToPixelValue = document.querySelector('.vhToPixel').value
    const vwToPixelValue = document.querySelector('.vwToPixel').value
    pixelToVH(pixelToVHValue)
    pixelToVW(pixelToVWValue)
    vhToPixel(vhToPixelValue)
    vwToPixel(vwToPixelValue)
  }