import React from 'react';
import { Box } from '@material-ui/core';
import { CoinDetailedNormalized } from '../../../api/types/CoinDetailedNormalized';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { communityDataOptions } from '../../../constants/CommunityDataOptions';
import { generateId } from '../../../utils/GenerateId';

interface CoinDetailCommunityDataProps {
    coin: CoinDetailedNormalized;
}

const CoinDetailCommunityData: React.FC<CoinDetailCommunityDataProps> = (({ coin }: CoinDetailCommunityDataProps) => (
    <Box display="flex" flexDirection="column">
        <Box component="h4" display="flex" alignItems="center">
            <EqualizerIcon color="primary" /><Box fontWeight='bold' ml="5px">Community statistics:</Box>
        </Box>
        {Object.keys(communityDataOptions).map((name: string) => {
            const uniqueId = generateId();

            return (
                <Box key={uniqueId} >
                    {coin.community_data[name]
                        ? <Box key={uniqueId} display="flex" p="5px">
                            <Box component={'span'} fontWeight="bold" mr="5px">{communityDataOptions[name]}</Box>
                            <Box component={'span'}>{coin.community_data[name]}</Box>
                        </Box>
                        : null
                    }
                </Box>
            )
        })
        }
    </Box>
))


export default CoinDetailCommunityData;