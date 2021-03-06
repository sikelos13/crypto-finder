import React from 'react';
import { Box } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import IconButton from '@material-ui/core/IconButton';
import { Pagination } from '../api/types/Pagination';
import { Coin } from '../api/types/Coin';

interface PaginationProps {
    pagination: Pagination;
    coinsList: Coin[];
    loading: boolean;
    paginate: (pageNumber: number) => void;
}
const PaginationNavBar: React.FC<PaginationProps> = ({ pagination, paginate, coinsList, loading }: PaginationProps) => {
    return (
        <>
            {coinsList.length < 21 &&
                <Box className="Pagination_TableCell">
                    <Box display="flex" alignItems="center">
                        <Box>
                            <IconButton disabled={pagination.page === 1 || loading} onClick={() => paginate(pagination.page - 1)}><ArrowBackIcon /></IconButton>
                            Page  {pagination.page}
                            <IconButton disabled={coinsList.length < 20 || loading} onClick={() => paginate(pagination.page + 1)}><ArrowForwardIcon /></IconButton>
                        </Box>
                    </Box>
                </Box>
            }
        </>
    )
}

export default PaginationNavBar;