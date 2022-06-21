import styles from './HpBox.module.scss'

import Button from 'UI/Button'

const buttonArgs = {
    url: '/abonnements',
    title: 'Découvrir nos abonnements',
    isLink: true
}

export default function HpBox() {
    return (
        <section className="pt-10_5 pb-12_5">
            <div className="grid grid-cols-22 extraPadding">
                <div className="col-span-8">
                    <h2 className="title--xl mb-1_1">Des boxs au concept unique</h2>
                    <p className="mb-3_33">Moon Wine, c’est : un vigneron, un artiste, une box de vin naturel et deux cuvées dont une totalement exclusive en édition limitée.  Le tout, disponible, en trois formules pour satisfaire tous vos besoins.</p>
                    <Button {...buttonArgs} />
                </div>
                <div className="col-span-10 col-start-13">
                </div>
            </div>
        </section>
    )
}