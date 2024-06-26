import { CONTENT_TYPE_ID } from '@/constants';
import { IArticleFields } from '@/contentful';

export interface IResponseData<T> {
    sys: { type: unknown };
    total: number;
    skip: number;
    limit: number;
    items: T[];
    includes: { Asset: [[Object], [Object], [Object], [Object]] };
}

export interface IPosts {
    fields: IArticleFields;
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
