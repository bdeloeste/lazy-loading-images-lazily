export const preloadImage = (image: HTMLImageElement) => {
  const src = image.dataset.src
  if (!src) {
    return
  }
  image.src = src
}