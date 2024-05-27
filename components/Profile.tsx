import { auth } from '@/configs/auth';
import Link from 'next/link';

export default async function Profile() {
    const session = await auth();

    return (
        <>
            {session && (
                <Link href={'/signout'} className={'flex items-center ml-auto justify-self-end '}>
                    <h2 className={'text-center align-middle p-3 '}> {session?.user?.name}</h2>
                    <img src={session?.user?.image || ''} alt={'user photo'} className={'w-14 h-14 rounded-full '} />
                </Link>
            )}
        </>
    );
}
