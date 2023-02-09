/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ListThemeRequest {
    /**
     * Returns items that contain the specified string.
     */
    search?: string;
    /**
     * The page of results to retrieve. Default `1` is the first page of results.
     */
    page?: number;
    /**
     * Number of results to retrieve per page. Default is 10. Maximum is 200.
     */
    pageSize?: number;
    /**
     * Retrieve typeforms for the specified workspace.
     */
    workspaceId?: string;
}
