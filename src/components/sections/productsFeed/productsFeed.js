import Image from 'next/image'

export default function ProductsFeed({products}) {
    return (
        <section className="pb-20">
            <div className="grid grid-cols-4 gap-6 px-6">
                {products &&
                    products.map((product) => {
                        let { id, title, images } = product

                        return (
                            <div key={`product-${id}`} className="flex flex-col">
                                <div className="py-40 w-full ovf-hidden relative" style={{backgroundImage: `url('${images[0]}')`}}>
                                    <Image src={images[0]} layout="fill" objectFit="cover" objectPosition="center" />
                                </div>
                                <h2 className="text-18 font-300 mt-2">{title}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}