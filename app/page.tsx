import { client } from '@/clientContentful/client';
import { IMainFields } from '@/contentful';
import { CONTENT_TYPE_ID } from '@/constants';
import { RecentPosts } from '@/components/recentPosts/RecentPosts';
import { AllBlogPosts } from '@/components/allBlogPosts/AllBlogPosts';

async function fetchPostData() {
    const data = await client.getEntries({ content_type: CONTENT_TYPE_ID.main, limit: 1 });
    return data.items[0].fields as unknown as IMainFields;
}

// export const generateMetadata = async (): Promise<Metadata> => {
//     const { title, description } = await fetchPostData();
//     return {
//         title: `${title} | Next App`,
//         description: description,
//     };
// };

export default async function MainPage() {
    return (
        <div>
            <RecentPosts />
            <AllBlogPosts />
        </div>
    );
}
