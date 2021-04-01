import React from 'react';
import { Box } from '@material-ui/core';
import { CoinDetailed } from '../../../api/types/CoinDetailed';
import GitHubIcon from '@material-ui/icons/GitHub';
import { githubDataOptions } from '../../../constants/GithubDataoptions';
import generateId from '../../../utils/GenerateId';

interface CoinDetailGithubDataDataProps {
    coin: CoinDetailed;
}

const CoinDetailGithubData: React.FC<CoinDetailGithubDataDataProps> = (({ coin }: CoinDetailGithubDataDataProps) => (
    <>
        {coin && coin.developer_data
            ? <Box display="flex" alignItems="center" pl="10px">
                <Box component="h4" display="flex" alignItems="center">
                    <GitHubIcon color="primary" /><Box fontWeight='bold' ml="5px">Github statistics:</Box>
                </Box>
                {Object.keys(githubDataOptions).map((name: string) => {
                    const uniqueId = generateId();

                    return (
                        <Box key={uniqueId} >
                            {coin.developer_data[name] 
                                ? <Box display="flex" p="5px">
                                    <Box component={'span'} fontWeight="bold" mr="5px">{githubDataOptions[name]}</Box>
                                    <Box component={'span'}>{coin.developer_data[name]}</Box>
                                </Box>
                                : null
                            }
                        </Box>
                        )
                    })
                }
            </Box>
            : <Box component="p">No data available</Box>
        }
    </>
))


export default CoinDetailGithubData;