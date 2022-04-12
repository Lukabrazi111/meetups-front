import Link from 'next/link';
import Container from './components/Container';

const Layout = () => {
    return (
        <header className='py-6 bg-main mb-14'>
            <Container>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl text-white font-bold'>
                        React Meetups
                    </h1>
                    <nav>
                        <ul>
                            <li>
                                <Link href={'/'}>
                                    <a className='mr-6 text-2xl text-secondary hover:text-white'>
                                        All Meetups
                                    </a>
                                </Link>
                                <Link href={'/new-meetup'}>
                                    <a className='text-2xl text-secondary hover:text-white'>
                                        Add New Meetup
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Layout;
