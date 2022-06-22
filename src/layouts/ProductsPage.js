import Head from 'next/head'
import parse from 'html-react-parser'

import ProductsFeed from '@sections/ProductsFeed'

export default function LayoutProductsPage({pageTitle, title, content, products, noWhiteLabel}) {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <section className="pt-13_5 pb-10_5" data-scroll-section>
                <div className="flex items-start justify-between relative">
                    <h1 className="title--xxl">{parse(title)}</h1>
                    <span className="title--xxl">({products.length})</span>
                    <p className="absolute right-2_77 bottom-0 translate-y-1/2">{parse(content)}</p>
                </div>
            </section>
            <ProductsFeed products={products} noWhiteLabel={noWhiteLabel} />
        </>
    )
}