
/**
 * PCRUD options
 */
export interface PcrudOptions {
    /**
     * number of linked records to retrieve 
     */
    flesh?: number;
    /**
     * Object specifying which linked fields to retrieve
     * 
     */
    flesh_fields?: { [key: string]: string[] };
    /**
     * Number for limiting results
     */
    limit?: number;
    /**
     * Number for pagination offset
     */
    offset?: number;
    /**
     * The order by of the request
     */

}

/**
 * Optional request operations
 */
export interface PcrudRequestOptions {
   
    authoritative?: boolean;
    atomic?: boolean;
    /**
     * If true, returns only IDs instead of full objects
     */
    idlist?: boolean;
    /**
     *  Whether to make an anonymous request
     */
    anonymous?: boolean;
    /**
     * If true, returns only the selectors for the request
     */
    fleshSelectors?: boolean
}
