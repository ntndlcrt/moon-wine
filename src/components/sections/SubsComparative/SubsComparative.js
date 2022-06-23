import SubCard from '@molecules/SubCard'

const subs = [
    {
        isDarkBeige: false,
        icon: 'empty',
        title: 'Basic',
        content: 'L’origine de Moon Wine (239,99 €/an)',
        price: '19€99',
        infos: '/mois (hors livraison) sur 12 mois',
        details: [
            '6 Boxs de série'
        ]
    },
    {
        isDarkBeige: true,
        icon: 'full',
        title: 'Prestige',
        content: 'Moon Wine sans limite (479,99 €/an)',
        price: '39€99',
        infos: '/mois (hors livraison) sur 12 mois',
        details: [
            '6 Boxs de série',
            '3 Boxs hors-série',
            '6 bouteilles au choix parmi la cave',
            'Remise de 15% sur la Cave Exclusive',
            'Goodies supplémentaires inclus avec les boxs'
        ]
    },
    {
        isDarkBeige: false,
        icon: 'half',
        title: 'Explorer',
        content: 'L’accès à toutes les collabs (359,99 €/an)',
        price: '29€99',
        infos: '/mois (hors livraison) sur 12 mois',
        details: [
            '6 Boxs de série',
            '3 Boxs hors-série',
            'Remise de 10% sur la Cave Exclusive',
        ]
    }
]

export default function SubsComparative() {
    return (
        <section className="mb-13" data-scroll-section>
            <div className="flex flex-col items-center text-center w-45 mb-6_25 mx-auto">
                <h2 className="title--xl mb-1_1">Nos offres</h2>
                <p>Nous vous proposons 3 types d’abonnements annuels. Les Boxs de série sont livrées tous les deux mois à partir de janvier et les boxs hors-série sont livrées en février, août et décembre</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {subs.map((sub, index) => {
                    return (
                        <SubCard key={`subcard-${index}`} {...sub} />
                    )
                })}
            </div>
        </section>
    )
}