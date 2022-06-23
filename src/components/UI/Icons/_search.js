export default function Search({color}) {
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
            <g id="Groupe_138" data-name="Groupe 138" transform="translate(-463.956 -63.5)">
                <g id="Rectangle_73" data-name="Rectangle 73" transform="translate(463.956 63.5)" className={`${fill} ${stroke}`} strokeWidth="1" opacity="0">
                    <rect width="24" height="24" stroke="none"/>
                    <rect x="0.5" y="0.5" width="23" height="23" fill="none"/>
                </g>
                <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(462.456 62)">
                    <path id="Tracé_24" data-name="Tracé 24" d="M20.5,12.5a8,8,0,1,1-8-8,8,8,0,0,1,8,8Z" transform="translate(0)" fill="none" className={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <path id="Tracé_25" data-name="Tracé 25" d="M29.325,29.325l-4.35-4.35" transform="translate(-6.825 -6.825)" fill="none" className={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                </g>
            </g>
        </svg>
    )
}