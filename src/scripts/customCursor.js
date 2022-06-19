export default function customCursor() {
    if(typeof document !== 'undefined') {
        let area = document.querySelector('.hp-hero__area')
        let cursor = div.querySelector('.hp-hero__cursor')

        div.addEventListener('mousemove', e => {
            let mouseX = e.clientX
            let mouseY = e.clientY
            cursor.style.left = mouseX + 'px'
            cursor.style.top = mouseY + 'px'
        })
    }
}