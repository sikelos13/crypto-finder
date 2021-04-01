import React from 'react';
import { Box } from '@material-ui/core';
import { CoinDetailed } from '../../../api/types/CoinDetailed';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { communityDataOptions } from '../../../constants/CommunityDataOptions';
import generateId from '../../../utils/GenerateId';

interface CoinDetailCommunityDataProps {
    coin: CoinDetailed;
}

const CoinDetailCommunityData: React.FC<CoinDetailCommunityDataProps> = (({ coin }: CoinDetailCommunityDataProps) => (
    <>
        {coin && coin.community_data
            ? <Box display="flex" alignItems="center" pl="10px">
                <EqualizerIcon color="primary" /><Box fontWeight='bold' ml="5px">Community statistics:</Box>
                {Object.keys(communityDataOptions).map((name: string) => {
                    const uniqueId = generateId();

                    return (
                        <Box key={uniqueId} >
                            {coin.community_data[name] &&
                                <Box key={uniqueId} display="flex" p="5px">
                                    <Box component={'span'} fontWeight="bold" mr="5px">{communityDataOptions[name]}</Box>
                                    <Box component={'span'}>{coin.community_data[name]}</Box>
                                </Box>
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


export default CoinDetailCommunityData;