export type StrapiAPIResponse<T> = {
    data: T extends Array<any> ? StrapiObject<T[number]>[] : StrapiObject<T>;
    meta: Object;
    error?: {
        status: number;
        name: string;
        message: string;
        details: Object;
    };
};

export type StrapiObject<T> = {
    id: number;
    attributes: T;
    meta: {
        pagination?: {
            page: number;
            pageSize: number;
            total: number;
        };
    };
};
