import { Fragment } from 'react';

import Image from 'next/image';
import Layout from '../components/Layout/Layout';
import Card from '../components/UI/Card';
import Container from '../components/Layout/components/Container';

export const getStaticPaths = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/meetups`);
    const data = await response.json();

    const paths = data.map((meetup) => {
        return {
            params: {
                meetupId: meetup.id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const meetupId = context.params.meetupId;
    const response = await fetch(
        `http://127.0.0.1:8000/api/meetups/${meetupId}`
    );
    const data = await response.json();

    return {
        props: {
            meetups: data,
        },
        revalidate: 10,
    };
};

const MeetupDetails = ({ meetups }) => {
    return (
        <Fragment>
            <Layout />
            <Container className={'max-w-xl'}>
                <Card>
                    <div>
                        <Image
                            className='rounded-t w-full object-cover'
                            src={meetups.image}
                            alt={meetups.title}
                            layout={'responsive'}
                            priority
                            width={800}
                            height={500}
                        />
                    </div>
                    <div className='p-5 text-center space-y-3 mb-5'>
                        <h1 className='text-3xl text-main'>{meetups.title}</h1>
                        <p className='italic text-xl text-sm'>
                            {meetups.address}
                        </p>
                        <p className='w-1/2 m-auto text-main border border-main p-5 rounded'>
                            {meetups.description}
                        </p>
                    </div>
                </Card>
            </Container>
        </Fragment>
    );
};

export default MeetupDetails;
