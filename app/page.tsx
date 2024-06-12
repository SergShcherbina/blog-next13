import { RecentPosts } from '@/components/recentPosts/RecentPosts';
import { AllBlogPosts } from '@/components/allBlogPosts/AllBlogPosts';


export default async function MainPage() {

    return (
        <div>
            <RecentPosts />
            <AllBlogPosts />
        </div>
    );
}
