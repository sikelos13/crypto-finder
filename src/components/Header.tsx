import React from 'react';
import { Box } from '@material-ui/core';
import { Pagination } from '../api/types/Pagination';
import PaginationNavBar from './PaginationNavBar';
import { Coin } from '../api/types/Coin';

interface HeaderProps {
    pagination: Pagination;
    coinsList: Coin[];
    handlePaginate: (pageNumber: number) => void;
}

const Header: React.FC<HeaderProps> = ({ pagination, handlePaginate, coinsList }: HeaderProps) => {
    return (
        <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" id="header-component">
            <Box component="h2" fontWeight="500" fontSize="2rem" color="#3569b8">Coins Finder</Box>
            <PaginationNavBar
                coinsList={coinsList}
                pagination={pagination}
                paginate={handlePaginate}
            />
        </Box>
    )
}


export default Header;