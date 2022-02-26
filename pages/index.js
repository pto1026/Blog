import Head from 'next/head'
import {getSortedPostsData} from '../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()

    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({allPostsData}) {
    return (
        <>
            <Head>
                <title>Squad Blog | The Official Blog for Squad</title>
            </Head>
            <div className="container">
                <section>
                    <main>
                        <h1 className='mt-5'>
                            Squad Blog | The Official Blog for Squad
                        </h1>
                        <div className="row mt-5">
                            <div className="col-md-8">
                                <ul className="list-group mb-3">
                                    {allPostsData.map(({id, date, title}) => (
                                        <li className="list-group-item" key={id}>
                                            <h6>{title}</h6>
                                            <br/>
                                            {id}
                                            <br/>
                                            <span className="text-muted">{date}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-md-4">
                            </div>
                        </div>
                    </main>
                </section>
            </div>
        </>
    )
}