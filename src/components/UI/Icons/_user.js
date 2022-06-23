export default function User({color}) {
    let stroke, fill

    switch(color) {
        case 'gray_darkest' :
            fill = 'fill-gray_darkest'
            stroke = 'stroke-gray_darkest'
            break
        case 'beige' :
            fill = 'fill-beige'
            stroke = 'stroke-beige'
            break
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g id="Groupe_139" data-name="Groupe 139" transform="translate(-534.645 -63.5)">
                <g id="Rectangle_74" data-name="Rectangle 74" transform="translate(534.645 63.5)" className={`${fill} ${stroke}`} stroke-width="1" opacity="0">
                    <rect width="24" height="24" stroke="none"/>
                    <rect x="0.5" y="0.5" width="23" height="23" fill="none"/>
                </g>
                <g id="Iconly_Curved_Profile" data-name="Iconly/Curved/Profile" transform="translate(534.8 63.6)">
                    <g id="Profile" transform="translate(5 2.4)">
                        <path id="Stroke-1" d="M6.845,19.262C3.153,19.262,0,18.687,0,16.387s3.133-4.425,6.845-4.425c3.692,0,6.845,2.1,6.845,4.4S10.556,19.262,6.845,19.262Z" fill="none" className={stroke} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/>
                        <path id="Stroke-3" d="M6.837,8.774a4.372,4.372,0,1,0-.031,0Z" fill="none" className={stroke} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/>
                    </g>
                </g>
            </g>
        </svg>
    )
}