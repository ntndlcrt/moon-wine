import Head from 'next/head'
import Image from 'next/image'

import { Button } from '@UI/Buttons'

export default function Error() {
    return (
        <>
            <Head>
                <title>404 | Moon Wine</title>
            </Head>
            <section className="h-screen w-screen bg-red flex items-center justify-center relative" data-scroll-section>
                <div className="flex flex-col items-center justify-center text-center text-beige">
                    <div className="flex items-center text-20_83 leading-1 font-molgak mb-2_77">
                        <span>4</span>
                        <div className="errorImg relative">
                            <Image src="/img/png/404.png" layout="fill" objectPosition="center" objectFit="contain" />
                        </div>
                        <span>4</span>
                    </div>
                    <p className="mb-2_77">Oops… Il semblerait que cette page n’existe pas.<br/>Pour vivre l’expérience Moon Wine, c’est par ici.</p>
                    <Button url="/" color="beige" isLink={true} title="Revenir à l'accueil" />
                </div>
            </section>
        </>
    )
}