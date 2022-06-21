export default function Arrow({color}) {
    let stroke

    switch(color) {
        case 'gray_darkest' :
            stroke = 'stroke-gray_darkest'
            break;
        case 'gray_dark' :
            stroke = 'stroke-gray_dark'
            break;
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30.707" height="8.707" viewBox="0 0 30.707 8.707">
            <g id="Icon_feather-arrow-left" data-name="Icon feather-arrow-left" transform="translate(-6.793 -8.146)">
                <path id="Tracé_390" data-name="Tracé 390" d="M37.5,18H7.5" transform="translate(0 -5.5)" fill="none" className={stroke} strokeLinejoin="round" strokeWidth="1"/>
                <path id="Tracé_391" data-name="Tracé 391" d="M11.5,15.5l-4-4,4-4" transform="translate(0 1)" fill="none" className={stroke} strokeWidth="1"/>
            </g>
        </svg>
    )
}