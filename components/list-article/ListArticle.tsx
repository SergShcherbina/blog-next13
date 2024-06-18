import { Article } from '@/components/article/Article';
import { IResponseGetPosts } from '@/types/getPostsType';

type PropsType = {
    data: IResponseGetPosts[];
};

export const ListArticle = ({ data }: PropsType) => {
    return (
        <>
            {data.map(item => {
                const datePublic = new Date(item.fields.date as string).toDateString();
                return (
                    <Article
                        key={item.sys.id}
                        imagePath={`https://${item.fields.image.fields.file!.url}`}
                        title={item.fields.title}
                        description={item.fields.description}
                        tags={item.fields.tag.split(',')}
                        author={item.fields.author}
                        date={datePublic}
                        slug={item.fields.slug}
                    />
                );
            })}
        </>
    );
};
