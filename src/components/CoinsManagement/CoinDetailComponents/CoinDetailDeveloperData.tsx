import React from 'react';
import { Box } from '@material-ui/core';
import { CoinDetailedNormalized } from '../../../api/types/CoinDetailedNormalized';
import GitHubIcon from '@material-ui/icons/GitHub';
import { developerDataOptions } from '../../../constants/DeveloperDataoptions';
import { generateId } from '../../../utils/GenerateId';

interface CoinDetailDeveloperDataProps {
    coin: CoinDetailedNormalized;
}

const CoinDetailDeveloperData: React.FC<CoinDetailDeveloperDataProps> = (({ coin }: CoinDetailDeveloperDataProps) => (
    <Box display="flex" flexDirection="column">
        <Box component="h4" display="flex" alignItems="center">
            <GitHubIcon color="primary" /><Box fontWeight='bold' ml="5px">Github statistics:</Box>
        </Box>
        {Object.keys(developerDataOptions).map((name: string) => {
            const uniqueId = generateId();

            return (
                <Box key={uniqueId} >
                    <Box display="flex" p="5px">
                        <Box component={'span'} fontWeight="bold" mr="5px">{developerDataOptions[name]}</Box>
                        <Box component={'span'}>{coin.developer_data[name]}</Box>
                    </Box>
                </Box>
            )
        })
        }
    </Box>
))


export default CoinDetailDeveloperData;