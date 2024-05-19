'use client';

const Error = ({ error }: { error: Error }) => {
    return (
        <div>
            <h2 className={'text-red-500'}>Oops... {error.message}</h2>
        </div>
    );
};

export default Error;
