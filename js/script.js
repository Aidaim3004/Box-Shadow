const box = document.querySelector('.box')
const horizontalX = document.querySelector('.horizontalX')
const verticalY = document.querySelector('.verticalY')
const blur = document.querySelector('.blur')
const stretch = document.querySelector('.stretch')
const color = document.querySelector('.color')
//const opacity = document.querySelector('.opacity')
const output = document.querySelector('.output')
const inset = document.querySelector('.inset')
const outset = document.querySelector('.outset')




function boxShadowGenerator() {
    let insetValue =''
    if (inset.checked){
        insetValue = 'inset'
    }

    box.style.boxShadow = `${horizontalX.value}px ${verticalY.value}px ${blur.value}px ${stretch.value}px ${color.value} ${insetValue}`;
    output.textContent = `Box-Shadow: ${horizontalX.value}px ${verticalY.value}px ${blur.value}px ${stretch.value}px ${color.value} `;

}
horizontalX.addEventListener('input', boxShadowGenerator)
verticalY.addEventListener('input', boxShadowGenerator)
blur.addEventListener('input', boxShadowGenerator)
stretch.addEventListener('input', boxShadowGenerator)
color.addEventListener('input', boxShadowGenerator)
inset.addEventListener('input', boxShadowGenerator)
outset.addEventListener('input', boxShadowGenerator)

boxShadowGenerator()
