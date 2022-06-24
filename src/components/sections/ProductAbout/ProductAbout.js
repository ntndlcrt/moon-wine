export default function ProductHero({bgColor, textColor}) {
    return (
        <section className={`pt-10_5 pb-13_89 relative ${bgColor}`} data-scroll-section>
            <div className="w-55 mx-auto">
                <div className="flex justify-center mb-3_33">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34.667" height="40" viewBox="0 0 34.667 40">
                        <path id="Shape" d="M144.139,0a19.946,19.946,0,0,0-14.667,6.392,21.36,21.36,0,0,1,11.811,33.4,19.78,19.78,0,0,0,2.856.21,20,20,0,0,0,0-40" transform="translate(-129.472)" fill="#f5f4ec"/>
                    </svg>
                </div>
                <h1 className={`title--xl text-center mb-1_67 ${textColor}`}>Haut en couleurs de l’étiquette à la dégustation</h1>
                <p className={`text-center w-75 mx-auto ${textColor}`}>Des fruits éclatants au nez, une bouche ample et fraîche, les tannins du grenache qui se mêlent à la concentration de la malvoisie rendant cet assemblage improbable et unique.</p>
            </div>
        </section>
    )
}