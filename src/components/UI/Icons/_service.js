export default function Service({icon}) {
    switch(icon) {
        case 'pay' :
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="23.5" height="17.5" viewBox="0 0 23.5 17.5">
                    <g id="Icon_feather-credit-card" data-name="Icon feather-credit-card" transform="translate(-0.25 -3.25)">
                        <path id="Tracé_421" data-name="Tracé 421" d="M3,4H21a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H3a2,2,0,0,1-2-2V6A2,2,0,0,1,3,4Z" fill="none" stroke="#211b24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                        <path id="Tracé_422" data-name="Tracé 422" d="M1,10H23" fill="none" stroke="#211b24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    </g>
                </svg>
            )
        case 'deliver' :
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="23.5" height="19.5" viewBox="0 0 23.5 19.5">
                    <g id="Icon_feather-truck" data-name="Icon feather-truck" transform="translate(-0.25 -2.25)">
                        <path id="Tracé_423" data-name="Tracé 423" d="M1,3H16V16H1Z" fill="none" stroke="#211b24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                        <path id="Tracé_424" data-name="Tracé 424" d="M16,8h4l3,3v5H16Z" fill="none" stroke="#211b24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                        <path id="Tracé_425" data-name="Tracé 425" d="M8,18.5A2.5,2.5,0,1,1,5.5,16,2.5,2.5,0,0,1,8,18.5Z" fill="none" stroke="#211b24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                        <path id="Tracé_426" data-name="Tracé 426" d="M21,18.5A2.5,2.5,0,1,1,18.5,16,2.5,2.5,0,0,1,21,18.5Z" fill="none" stroke="#211b24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    </g>
                </svg>
            )
        case 'gift' :
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="21.5" viewBox="0 0 21.5 21.5">
                    <g id="Icon_feather-gift" data-name="Icon feather-gift" transform="translate(-1.25 -1.25)">
                        <path id="Tracé_427" data-name="Tracé 427" d="M20,12V22H4V12" fill="none" stroke="#211b24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                        <path id="Tracé_428" data-name="Tracé 428" d="M2,7H22v5H2Z" fill="none" stroke="#211b24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                        <path id="Tracé_429" data-name="Tracé 429" d="M12,22V7" fill="none" stroke="#211b24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                        <path id="Tracé_430" data-name="Tracé 430" d="M12,7H7.5a2.5,2.5,0,0,1,0-5C11,2,12,7,12,7Z" fill="none" stroke="#211b24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                        <path id="Tracé_431" data-name="Tracé 431" d="M12,7h4.5a2.5,2.5,0,0,0,0-5C13,2,12,7,12,7Z" fill="none" stroke="#211b24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    </g>
                </svg>
            )
    }
}