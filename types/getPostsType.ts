import { Document } from '@contentful/rich-text-types';
import { CONTENT_TYPE_ID } from '@/constants';
import { Asset } from 'contentful/dist/types/types/asset';

export interface IResponseGetPosts {
    fields: IFields;
    metadata: { tags: number[] };
    sys: {
        contentType: IEnvironment;
        createdAt: string;
        environment: IEnvironment;
        id: string;
        locale: string;
        revision: number;
        space: IEnvironment;
        type: string;
        updatedAt: string;
    };
}

export type IFields = {
    author: string;
    description: string;
    image: Asset;
    slug: string | any;
    tag: string;
    title: string;
    text: Document;
    date: string;
};

interface IEnvironment {
    sys: {
        id: string;
        linkType: string;
        type: string;
    };
}

export interface IContentTypeId {
    contentTypeId: CONTENT_TYPE_ID;
}
