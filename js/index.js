const btnDepartments = document.getElementById('btn-departments'),
      btnCloseMenu = document.getElementById('btn-menu-close'),
      grid = document.getElementById('grid'),
      containerSubcategories = document.querySelector('#menu .container-subcategories'),
      isMobile = () => window.innerWidth <= 800

btnDepartments.addEventListener('mouseover', () => {
  if (!isMobile())
    grid.classList.add('active')
})

grid.addEventListener('mouseleave', () => {
  if (!isMobile())
    grid.classList.remove('active')
})

document.querySelectorAll('#menu .categories a').forEach(element => {
  element.addEventListener('mouseenter', el => {
    if (!isMobile()) {
      document.querySelectorAll('#menu .subcategory').forEach(category => {
        category.classList.remove('active')
  
        if (category.dataset.category === el.target.dataset.category)
          category.classList.add('active')
      })
    }
  })
})

// EventListeners for mobile devices
document.querySelector('#btn-menu-bars').addEventListener('click', e => {
  e.preventDefault()
  document.querySelector('#menu .container-nav-links').classList.toggle('active')

  if (document.querySelector('#menu .container-nav-links').classList.contains('active'))
    document.querySelector('body').style.overflow = 'hidden'
  else 
  document.querySelector('body').style.overflow = 'visible'
})

// Click on 'All departments' for mobile
btnDepartments.addEventListener('click', e => {
  e.preventDefault()
  grid.classList.add('active')
  btnCloseMenu.classList.add('active')
})

// 'Back' button in Categories menu
document.querySelector('#grid .categories .btn-back').addEventListener('click', e => {
  e.preventDefault()
  grid.classList.remove('active')
  btnCloseMenu.classList.remove('active')
})

document.querySelectorAll('#menu .categories a').forEach(element => {
  element.addEventListener('click', e => {
    if (isMobile()) {
      containerSubcategories.classList.add('active')
      document.querySelectorAll('#menu .subcategory').forEach(category => {
        category.classList.remove('active')

        if (category.dataset.category === e.target.dataset.category) {
          category.classList.add('active')
        }
      })
    }
  })
})

// 'Back' button in Subcategories menu
document.querySelectorAll('#grid .container-subcategories .btn-back').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault()
    containerSubcategories.classList.remove('active')
  })
})

btnCloseMenu.addEventListener('click', e => {
  e.preventDefault()
  document.querySelectorAll('#menu .active').forEach(element => {
    element.classList.remove('active')
  })
  document.querySelector('body').style.overflow = 'visible'
})







// PRODUCT

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})




const productImages = document.querySelectorAll(".product-images img"); // selecting all image thumbs
const productImageSlide = document.querySelector(".image-slider"); // seclecting image slider element

let activeImageSlide = 0; // default slider image

productImages.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide = i; // updating the image slider variable to track current thumb
    })
})