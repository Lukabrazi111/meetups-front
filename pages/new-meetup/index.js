import { Fragment } from 'react';
import Container from '../../components/Layout/components/Container';
import Card from '../../components/UI/Card';
import Layout from '../../components/Layout/Layout';

const NewMeetup = () => {
    return (
        <Fragment>
            <Layout />
            <div className='w-1/2 m-auto'>
                <Card>
                    <form
                        action='#'
                        method='post'
                        className='flex flex-col px-4 py-3 space-y-2'
                    >
                        <label htmlFor='title'>Meetup Title</label>
                        <input
                            className='border border-main px-2 py-2 rounded outline-0'
                            type='text'
                            id='title'
                            name='title'
                        />
                        {/*<small className="text-red-500">{{$message}}</small>*/}

                        <label htmlFor='image'>Meetup Image</label>
                        <input
                            className='border border-main px-2 py-2 rounded outline-0'
                            type='url'
                            id='image'
                            name='image'
                        />
                        {/*<small className="text-red-500">{{$message}}</small>*/}

                        <label htmlFor='address'>Address</label>
                        <input
                            className='border border-main px-2 py-2 rounded outline-0'
                            type='text'
                            id='address'
                            name='address'
                        />
                        {/*<small className="text-red-500">{{$message}}</small>*/}

                        <label htmlFor='description'>Description</label>
                        <textarea
                            className='border border-main px-2 py-2 rounded outline-0'
                            id='description'
                            rows='5'
                            name='description'
                        />
                        {/*<small className="text-red-500">{{$message}}</small>*/}

                        <div className='flex justify-end'>
                            <button
                                className='bg-main px-4 rounded font-bold py-2 text-white outline-0'
                                type='submit'
                            >
                                Add Meetup
                            </button>
                        </div>
                    </form>
                </Card>
            </div>
        </Fragment>
    );
};

export default NewMeetup;
