import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Login from '../components/account/login';

export default function Home() {
    const router = useRouter();

    const handleSubmit = () => {
        router.push({
            pathname: '/library/[bookId]',
            query: {
                bookId: 'book1',
                ref: 'social',
            },
        });
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Duy Hoang</title>
                <meta name='description' content='NextJS with js' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href='https://nextjs.org'>Duy Duy!</a>
                </h1>
                <Login/>
            </main>
        </div>
    );
}
