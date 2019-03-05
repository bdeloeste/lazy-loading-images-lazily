export const preloadImage = (image: HTMLImageElement) => {
  const src = image.getAttribute('data-src')
  if (!src) {
    return
  }
  image.src = src
}