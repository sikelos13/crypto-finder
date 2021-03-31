export interface Pagination {
    page: number;
    perPage: number;
    total_pages: number;
    total_results: number;
    hasNextPage: boolean;
}