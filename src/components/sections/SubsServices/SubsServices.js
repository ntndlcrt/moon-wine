import { Service } from '@UI/Icons'

import styles from './SubsServices.module.scss'

export default function SubsServices() {
    return (
        <section className="mb-13" data-scroll-section>
            <div className="flex items-start justify-between extraPadding">
                <span className="title--xl w-30">Et avec chaque offre :</span>
                <div className="flex flex-col w-65">
                    <div className={styles.service}>
                        <div className={styles.serviceIcon}>
                            <Service icon="pay" />
                        </div>
                        <p className="text-1_18">Facilités de paiement (en 1, 3 ou 12 fois)</p>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.serviceIcon}>
                            <Service icon="deliver" />
                        </div>
                        <p className="text-1_18">Envoi Chronopost en point relais ou à domicile</p>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.serviceIcon}>
                            <Service icon="gift" />
                        </div>
                        <p className="text-1_18">Livraison offerte en point relais si paiement en une fois</p>
                    </div>
                </div>
            </div>
        </section>
    )
}