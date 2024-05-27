import { auth, signOut } from '@/configs/auth';
import { redirect } from 'next/navigation';

export default async function SignOutPage() {
    const session = await auth();
    if (!session?.user) redirect('/signin');

    return (
        <div className={'flex flex-col items-center gap-3 mt-[10vh]'}>
            <h5>Are you sure you want to sign out?</h5>
            <form
                action={async formData => {
                    'use server';
                    await signOut();
                }}
            >
                <button
                    type='submit'
                    className={'border rounded-2xl flex shadow p-3  w-max bg-neutral-800 text-gray-100'}
                >
                    Sign out
                </button>
            </form>
        </div>
    );
}
