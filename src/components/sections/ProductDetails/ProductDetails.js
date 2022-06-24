import Image from 'next/image'

import styles from './ProductDetails.module.scss'

export default function ProductDetails({bgColor, textColor}) {
    return (
        <section className={`relative pb-6 overflow-hidden ${bgColor}`} data-scroll-section>
            <div className="extraPadding grid grid-cols-2 gap-7 items-stretch">
                <div className="col-span-1">
                    <div className={styles.productDetailsImage} data-scroll data-scroll-speed="-2">
                        <Image src="/img/png/productAbout.jpg" layout="fill" objectFit="cover" objectPosition="center" />
                    </div>
                </div>
                <div className={`col-span-1 py-3_33 flex flex-col ${textColor}`}>
                    <div className="title--xl mb-1_5">Vin unique<br/>100% bio</div>
                    <div className="border-b border-beige_faded flex flex-col pb-1_25 mt-1_25">
                        <span className="text-0_83 font-600 uppercase">Type</span>
                        <span className="text-1_67 font-300">Rouge</span>
                    </div>
                    <div className="border-b border-beige_faded flex flex-col pb-1_25 mt-1_25">
                        <span className="text-0_83 font-600 uppercase">Taux d'alcool</span>
                        <span className="text-1_67 font-300">11,5%</span>
                    </div>
                    <div className="border-b border-beige_faded flex flex-col pb-1_25 mt-1_25">
                        <span className="text-0_83 font-600 uppercase">Région</span>
                        <span className="text-1_67 font-300">Région de production, Pays</span>
                    </div>
                    <div className="border-b border-beige_faded flex flex-col pb-1_25 mt-1_25">
                        <span className="text-0_83 font-600 uppercase">Variétés</span>
                        <span className="text-1_67 font-300">70% de Grenache, 30% de Malvoisie</span>
                    </div>
                    <div className="border-b border-beige_faded flex flex-col pb-1_25 mt-1_25">
                        <span className="text-0_83 font-600 uppercase">Service</span>
                        <span className="text-1_67 font-300">10-12°C</span>
                    </div>
                </div>
            </div>
        </section>
    )
}