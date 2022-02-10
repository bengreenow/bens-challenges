export type StrapiAPIResponse <T> = {
    data: T & StrapiObject;
    meta: Object;
    error?: {
        status: number;
        name: string;
        message: string;
        details: Object;
    }

}

type StrapiObject = {
    id: number;
    attributes: Object;
    meta: {
        pagination?: {
            page: number,
            pageSize: number,
            total: number
        }
    };
}
