import { Article } from '@/components/article/Article';

type ImageFieldType = { fields: { file: { url: string; title: string } } };
type PropsType = {
    data: any[];
};

export const ListArticle = ({ data }: PropsType) => {
    return (
        <>
            {data.map(item => {
                const datePublic = new Date(item.fields.date as string).toDateString();
                return (
                    <Article
                        key={item.sys.id}
                        imagePath={`https://${(item.fields.image as ImageFieldType).fields.file.url}`}
                        title={item.fields.title as string}
                        description={item.fields.description as string}
                        tags={(item.fields.tag as string).split(',')}
                        author={item.fields.author as string}
                        date={datePublic}
                        slug={item.fields.slug as string}
                    />
                );
            })}
        </>
    );
};
