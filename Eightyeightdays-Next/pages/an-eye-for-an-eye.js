import Head from 'next/head.js'

export default function Writing({data}){
    console.log(data)
    return(
        <>
            <Head>
                <title>An Eye For An Eye</title>
                <meta name="description" content="Eightyeightdays" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <h1>Photography Home</h1>
            <div className='container'>
                <div>Series</div>
                <div>Processes</div>
                <div>On Photography</div>
                <div>Galeries</div>
            </div>
            
        </>
    )
}