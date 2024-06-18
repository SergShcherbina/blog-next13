import { auth } from '@/configs/auth';
import Link from 'next/link';
import s from './profile.module.scss';

export default async function Profile() {
    const session = await auth();
    console.log('SESSION:', session);
    return (
        <>
            {session && (
                <Link href={'/signout'} className={s.link}>
                    <img src={session.user?.image || ''} alt={'user photo'} className={s.ava} />
                    <h2 className={s.username}> {session?.user?.name}</h2>
                </Link>
            )}
        </>
    );
}
