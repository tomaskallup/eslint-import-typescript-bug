// General typescript helper functions/types
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type MetaArray<T> = T[] & {
    meta: {
        pagination: {
            page: number;
            limit: number;
            pages: number;
            total: number;
            next: number | null;
            prev: number | null;
        };
    };
};

export type valueof<T> = T[keyof T];
