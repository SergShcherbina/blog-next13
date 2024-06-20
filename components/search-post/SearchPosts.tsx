'use client';

import { useState } from 'react';

import { usePosts } from '@/store/postsStore';

export const SearchPosts = () => {
    const [getPostsByText, loading] = usePosts(state => [state.getPostsByText, state.loading]);
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        getPostsByText(searchValue);
    };

    return (
        <form onSubmit={handleSubmit} className={'py-3'}>
            <input
                type='text'
                value={searchValue}
                placeholder={'search post'}
                onChange={event => setSearchValue(event.target.value)}
                className={' border px-3 py-2 font-medium rounded-l-lg'}
            />
            <button
                type='submit'
                className={' border rounded-r-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900'}
            >
                {loading ? 'Loading...' : 'Search'}
            </button>
        </form>
    );
};
