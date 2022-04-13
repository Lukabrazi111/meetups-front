import Link from 'next/link';
import Container from './components/Container';
import { useRouter } from 'next/router';

const Layout = () => {
    const router = useRouter();
    return (
        <header className='py-6 bg-main mb-14'>
            <Container className={'max-w-5xl'}>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl text-white font-bold'>
                        React Meetups
                    </h1>
                    <nav>
                        <ul>
                            <li>
                                <Link href={'/'}>
                                    <a
                                        className={
                                            router.pathname === '/'
                                                ? 'mr-6 text-2xl text-white'
                                                : 'mr-6 text-2xl text-secondary hover:text-white'
                                        }
                                    >
                                        All Meetups
                                    </a>
                                </Link>
                                <Link href={'/new-meetup'}>
                                    <a
                                        className={
                                            router.pathname === '/new-meetup'
                                                ? 'text-2xl text-white'
                                                : 'text-2xl text-secondary hover:text-white'
                                        }
                                    >
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
