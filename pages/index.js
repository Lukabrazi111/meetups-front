import Layout from '../components/Layout/Layout';
import { Fragment } from 'react';
import Container from '../components/Layout/components/Container';
import Card from '../components/UI/Card';

export default function Home() {
    return (
        <Fragment>
            <Layout />
            <main className='w-1/2 m-auto pb-5'>
                <Container>
                    <Card className='mb-5'>
                        <div className='w-full h-80 overflow-hidden'>
                            <img
                                className='object-cover rounded-t-2xl w-full h-full'
                                src='https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                                alt='image'
                            />
                        </div>

                        <div className='text-center space-y-4 py-4'>
                            <h1 className='font-bold text-gray-700'>
                                Meetup Title
                            </h1>
                            <p className='italic'>Meetup address</p>

                            <div className='pt-2'>
                                <a
                                    className='px-4 py-2 border border-main rounded transition-colors hover:text-white hover:bg-main'
                                    href='#'
                                >
                                    Show Details
                                </a>
                            </div>
                        </div>
                    </Card>
                </Container>
            </main>
        </Fragment>
    );
}
