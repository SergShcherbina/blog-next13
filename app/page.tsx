import { AllBlogPosts } from '@/components/all-blog-posts/AllBlogPosts';
import { RecentPosts } from '@/components/recent-posts/RecentPosts';

export default async function MainPage() {
    return (
        <div>
            <RecentPosts />
            <AllBlogPosts />
        </div>
    );
}
