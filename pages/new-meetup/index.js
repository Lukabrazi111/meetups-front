import { Fragment } from 'react';
import Card from '../../components/UI/Card';
import Layout from '../../components/Layout/Layout';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const NewMeetup = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            title: '',
            image: '',
            address: '',
            description: '',
        },
    });

    const imageUrl = watch('image');

    const submitFormHandler = async (data) => {
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(
            'http://127.0.0.1:8000/api/new-meetups',
            options
        );

        const dataHandler = await response.json();

        if (response.ok) {
            return router.push('/');
        }
    };

    return (
        <Fragment>
            <Layout />
            <div className='w-1/2 m-auto'>
                <Card>
                    <form
                        onSubmit={handleSubmit(submitFormHandler)}
                        action='#'
                        method='post'
                        className='flex flex-col px-4 py-3 space-y-2'
                    >
                        <label htmlFor='title'>Meetup Title</label>
                        <input
                            {...register('title', {
                                required: 'The title field is required',
                                minLength: {
                                    value: 3,
                                    message:
                                        'The title must be at least 3 characters',
                                },
                            })}
                            className='border border-main px-2 py-2 rounded outline-0'
                            type='text'
                            id='title'
                            name='title'
                        />
                        {errors.title && (
                            <small className='text-red-500'>
                                {errors.title?.message}
                            </small>
                        )}

                        <label htmlFor='image'>Meetup Image</label>
                        <input
                            {...register('image', {
                                required: '*This field must be url',
                            })}
                            type='url'
                            className='border border-main px-2 py-2 rounded outline-0'
                            id='image'
                            name='image'
                        />
                        {!imageUrl.startsWith('https') && (
                            <small className='text-red-500'>
                                *This field must be url
                            </small>
                        )}

                        <label htmlFor='address'>Address</label>
                        <input
                            {...register('address', {
                                required: 'The address field is required',
                                minLength: {
                                    value: 3,
                                    message:
                                        'The address must be at least 3 characters',
                                },
                            })}
                            className='border border-main px-2 py-2 rounded outline-0'
                            type='text'
                            id='address'
                            name='address'
                        />
                        {errors.address && (
                            <small className='text-red-500'>
                                {errors.address?.message}
                            </small>
                        )}

                        <label htmlFor='description'>Description</label>
                        <textarea
                            {...register('description', {
                                required: 'The description field is required',
                                minLength: {
                                    value: 10,
                                    message:
                                        'The description must be at least 10 characters',
                                },
                            })}
                            className='border border-main px-2 py-2 rounded outline-0'
                            id='description'
                            rows='5'
                            name='description'
                        />
                        {errors.description && (
                            <small className='text-red-500'>
                                {errors.description?.message}
                            </small>
                        )}

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
