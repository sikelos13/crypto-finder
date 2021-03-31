import React from 'react';
import { Box } from '@material-ui/core';
import { CoinDetailed } from '../../../api/types/CoinDetailed';
import GitHubIcon from '@material-ui/icons/GitHub';

interface CoinDetailGithubDataDataProps {
    coin: CoinDetailed;
}

const CoinDetailGithubData: React.FC<CoinDetailGithubDataDataProps> = (({ coin }: CoinDetailGithubDataDataProps) => (
    <>
        {coin && coin.developer_data
            ? <Box display="flex" alignItems="center" pl="10px">
                <Box component="h3" display="flex" alignItems="center">
                    <GitHubIcon color="primary" /><Box fontWeight='bold' ml="5px">Github statistics:</Box>
                </Box>
                  {coin.developer_data.closed_issues &&
                     <Box p="10px">
                        <Box component={'span'} fontWeight="bold" mr="5px">Closed issues:</Box> 
                        <Box component={'span'}>{coin.developer_data.closed_issues}</Box>
                    </Box>
                }
                {coin.developer_data.forks && 
                    <Box p="10px">
                        <Box component={'span'} fontWeight="bold" mr="5px">Forks:</Box> 
                        <Box component={'span'}>{coin.developer_data.forks}</Box>
                    </Box>
                }
                {coin.developer_data.stars &&
                     <Box p="10px">
                        <Box component={'span'} fontWeight="bold" mr="5px">Stars:</Box> 
                        <Box component={'span'}>{coin.developer_data.stars}</Box>
                    </Box>
                }
                 {coin.developer_data.subscribers &&
                     <Box p="10px">
                        <Box component={'span'} fontWeight="bold" mr="5px">Subscribers:</Box> 
                        <Box component={'span'}>{coin.developer_data.subscribers}</Box>
                    </Box>
                }
                {coin.developer_data.total_issues &&
                     <Box p="10px">
                        <Box component={'span'} fontWeight="bold" mr="5px">Total issues:</Box> 
                        <Box component={'span'}>{coin.developer_data.total_issues}</Box>
                    </Box>
                }
            </Box>
            : <Box component="p">No data available</Box>
        }
    </>
))


export default CoinDetailGithubData;