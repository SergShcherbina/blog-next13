import { Article } from '@/components/article/Article';
import s from './recentPosts.module.scss';

export const RecentPosts = () => {
    return (
        <section className={s.root}>
            <h2 className={s.title}>{'Recent posts'}</h2>
            <div className={s.wrapperArticles}>
                <Article
                    imagePath={''}
                    title={'UX review presentations'}
                    description={
                        'How do you create compelling presentations that wow your colleagues and impress your managers?'
                    }
                    tags={['Design', 'Research', 'Presentation']}
                    author={'Olivia Rhye'}
                    date={'1 Lan 2023'}
                />
                <Article
                    imagePath={''}
                    title={'UX review presentations'}
                    description={
                        'How do you create compelling presentations that wow your colleagues and impress your managers?'
                    }
                    tags={['Design', 'Research', 'Presentation']}
                    author={'Olivia Rhye'}
                    date={'1 Lan 2023'}
                />
                <Article
                    imagePath={''}
                    title={'UX review presentations'}
                    description={
                        'How do you create compelling presentations that wow your colleagues and impress your managers?'
                    }
                    tags={['Design', 'Research', 'Presentation']}
                    author={'Olivia Rhye'}
                    date={'1 Lan 2023'}
                />
                <Article
                    imagePath={''}
                    title={'UX review presentations'}
                    description={
                        'How do you create compelling presentations that wow your colleagues and impress your managers?'
                    }
                    tags={['Design', 'Research', 'Presentation']}
                    author={'Olivia Rhye'}
                    date={'1 Lan 2023'}
                />
            </div>
        </section>
    );
};
