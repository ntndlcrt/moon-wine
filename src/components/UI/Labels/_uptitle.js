export default function LabelUptitle({title, color}) {
    let classes = ''

    switch(color) {
        case 'green_light' :
            classes = 'bg-green_light border border-green_light'
            break
        case 'outline' :
            classes = 'border border-beige_faded text-beige'
            break
    }

    return (
        <h2 className={`uppercase text-0_7 font-600 rounded-full px-1_1 py-0_55 ${classes}`}>{title}</h2>
    )
}