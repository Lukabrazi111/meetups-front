import { Fragment } from 'react';
import Layout from '../components/Layout/Layout';
import Card from '../components/UI/Card';
import Container from '../components/Layout/components/Container';

const MeetupDetails = () => {
    return (
        <Fragment>
            <Layout />
            <Container className={'max-w-2xl'}>
                <Card>
                    <div>
                        <img
                            className='rounded-t w-full object-cover'
                            src='https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                            alt='title'
                        />
                    </div>
                    <div className='p-5 text-center space-y-3 mb-5'>
                        <h1 className='text-3xl text-main'>Meetup Title</h1>
                        <p className='italic text-xl text-sm'>Meetup address</p>
                        <p className='w-1/2 m-auto text-main border border-main p-5 rounded'>
                            Meetup description
                        </p>
                    </div>
                </Card>
            </Container>
        </Fragment>
    );
};

export default MeetupDetails;
