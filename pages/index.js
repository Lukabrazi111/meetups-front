import { Fragment } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout/Layout';
import Container from '../components/Layout/components/Container';
import Card from '../components/UI/Card';

export const getStaticProps = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/meetups', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    return {
        props: {
            meetups: data,
        },
        revalidate: 10,
    };
};

export default function Home({ meetups }) {
    return (
        <Fragment>
            <Layout />
            {meetups.map((meetup) => (
                <main key={meetup.id} className='w-full max-w-xl m-auto pb-5'>
                    <Container>
                        <Card className='mb-5'>
                            <div className='w-full overflow-hidden'>
                                <Image
                                    className='object-cover rounded-t-2xl w-full h-full'
                                    src={meetup.image}
                                    alt={meetup.title}
                                    layout={'responsive'}
                                    width={900}
                                    height={500}
                                    priority
                                />
                            </div>

                            <div className='text-center space-y-4 py-4'>
                                <h1 className='font-bold text-gray-700'>
                                    {meetup.title}
                                </h1>
                                <p className='italic'>{meetup.address}</p>

                                <div className='pt-2'>
                                    <Link href={'/' + meetup.id}>
                                        <a className='px-4 py-2 border border-main rounded transition-colors hover:text-white hover:bg-main'>
                                            Show Details
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </Container>
                </main>
            ))}
        </Fragment>
    );
}
