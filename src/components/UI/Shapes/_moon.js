export default function ShapeMoon({color}) {
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
        <path id="Shape" d="M276.141,0A199.463,199.463,0,0,0,129.472,63.917C221.548,87.64,289.58,171.29,289.58,270.8a212.926,212.926,0,0,1-42,127.106,197.8,197.8,0,0,0,28.557,2.1c110.442,0,200-89.532,200-199.946C476.139,89.532,386.583,0,276.141,0" transform="translate(-66.472)" className={fill} />
      </g>
    </svg>
  )
}