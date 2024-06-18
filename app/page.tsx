import { RecentPosts } from '@/components/recent-posts/RecentPosts';
import { AllBlogPosts } from '@/components/all-blog-posts/AllBlogPosts';

export default async function MainPage() {
    return (
        <div>
            <RecentPosts />
            <AllBlogPosts />
        </div>
    );
}
