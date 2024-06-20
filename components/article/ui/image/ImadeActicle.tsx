import Image from 'next/image';

import { blurDataURL } from '@/public/blurDataURL';

import s from './ImageArticle.module.scss';

export const ImageArticle = ({ imagePath }: { imagePath: string }) => {
    return (
        <div className={s.wrapperImage}>
            <Image
                src={imagePath}
                alt={'image'}
                fill={true}
                sizes='(max-width: 640px) 100vw, (max-width: 1280px) 974px, 723px'
                placeholder={'blur'}
                blurDataURL={blurDataURL}
                className={s.image}
            />
        </div>
    );
};
