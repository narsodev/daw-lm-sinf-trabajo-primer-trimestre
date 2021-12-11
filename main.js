const modal = document.querySelector('.modal')
const imgViewer = document.querySelector('.img-viewer')

modal.addEventListener('click', e => {
  if (!imgViewer.contains(e.target)) modal.classList.add('hidden')
})


const closeImgViewer = document.querySelector('.img-viewer button')
closeImgViewer.addEventListener('click', () => {
  modal.classList.add('hidden')
})

const img = document.querySelector('.modal img')
const photos = document.querySelectorAll('.photos button')

photos.forEach(photo => {
  photo.addEventListener('click', e => {
    const { src, alt } = photo.querySelector('img')
    img.setAttribute('src', src)
    img.setAttribute('alt', alt)
    modal.classList.remove('hidden')
  })
})