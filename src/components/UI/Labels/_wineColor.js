export default function LabelWineColor({text}) {
    if(text) {
        return (
            <span className="bg-white rounded-full text-0_8 tracking-wide uppercase px-1_1 py-0_55 font-500">{text}</span>
        )
    } else {
        return <></>
    }
}