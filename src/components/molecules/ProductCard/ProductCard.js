import Image from 'next/image'

export default function ProductCard({ src, title }) {
    return (
        <div className="flex flex-col">
            <div className="py-40 w-full ovf-hidden relative">
                {src &&
                    <Image src={src ?? ''} layout="fill" objectFit="cover" objectPosition="center" />
                }
            </div>
            <h2 className="text-18 font-300 mt-2">{title ?? ''}</h2>
        </div>
    )
}