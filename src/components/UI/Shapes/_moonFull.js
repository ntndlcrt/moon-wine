export default function ShapeMoonFull({color}) {
    let fill
  
    switch(color) {
        case 'white' :
            fill = 'fill-white'
            break
        case 'gray' :
            fill = 'fill-gray'
            break
    }
  
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
            <g id="Shape" transform="translate(-10)">
                <path id="Background" d="M200,0C89.543,0,0,89.543,0,200S89.543,400,200,400s200-89.543,200-200S310.457,0,200,0Z" className={fill}/>
            </g>
        </svg>
    )
}
