export default function Close({ clickEvent }) {
    return (
        <div className="relative rounded-round w-content border border-gray_darkest p-2_77 cursor-pointer" onClick={() => {clickEvent()}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="17.061" height="17.061" viewBox="0 0 17.061 17.061" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <g id="Groupe_7" data-name="Groupe 7" transform="translate(-1353.656 -53.656)">
                    <line id="Ligne_1" data-name="Ligne 1" x2="22.627" transform="translate(1354.186 70.186) rotate(-45)" fill="none" stroke="#211b24" strokeWidth="1.5"/>
                    <line id="Ligne_2" data-name="Ligne 2" x2="22.627" transform="translate(1354.186 54.186) rotate(45)" fill="none" stroke="#211b24" strokeWidth="1.5"/>
                </g>
            </svg>
        </div>
    )
}