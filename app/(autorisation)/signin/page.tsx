import { auth, signIn } from '@/configs/auth';
import { redirect } from 'next/navigation';

export default async function SignInPage() {
    const session = await auth();
    if (session?.user) redirect('/');

    return (
        <form
            action={async () => {
                'use server';
                await signIn('github');
            }}
        >
            <button
                type='submit'
                className={
                    'bg-neutral-800 rounded-md px-3 py-2 text-gray-100 hover:bg-neutral-700 mx-auto block my-[20vh]'
                }
            >
                Signin with GitHub
            </button>
        </form>
    );
}
