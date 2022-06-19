export default function AvailableForSale({available}) {
    let text, color, background

    if(available) {
        text = 'Disponible'
        color= 'text-green'
        background= 'bg-green'
    } else {
        text = 'Plus disponible'
        color= 'text-red'
        background= 'bg-red'
    }

    return (
        <span className={`text-0_8 ${color} font-500 uppercase bullet pl-1 relative leading-1`}>
            <div className={`p-0_25 absolute left-0 top-1/2 -translate-y-1/2 block rounded-round ${background}`}></div>
            {text}
        </span>
    )
}