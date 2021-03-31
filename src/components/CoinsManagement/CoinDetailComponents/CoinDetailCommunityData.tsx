import React from 'react';
import { Box } from '@material-ui/core';
import { CoinDetailed } from '../../../api/types/CoinDetailed';
import EqualizerIcon from '@material-ui/icons/Equalizer';
interface CoinDetailCommunityDataProps {
    coin: CoinDetailed;
}

const CoinDetailCommunityData: React.FC<CoinDetailCommunityDataProps> = (({ coin }: CoinDetailCommunityDataProps) => (
    <>
        {coin && coin.community_data
            ? <Box display="flex" alignItems="center" pl="10px">
                <EqualizerIcon color="primary" /><Box fontWeight='bold' ml="5px">Community statistics:</Box>
                  {coin.community_data.facebook_likes &&
                     <Box p="10px">
                        <Box component={'span'} fontWeight="bold" mr="5px">Facebook likes:</Box> 
                        <Box component={'span'}>{coin.community_data.facebook_likes}</Box>
                    </Box>
                }
                {coin.community_data.reddit_subscribers && 
                    <Box p="10px">
                        <Box component={'span'} fontWeight="bold" mr="5px">Reddit subscribers:</Box> 
                        <Box component={'span'}>{coin.community_data.reddit_subscribers}</Box>
                    </Box>
                }
                {coin.community_data.telegram_channel_user_count &&
                     <Box p="10px">
                        <Box component={'span'} fontWeight="bold" mr="5px">Telegram channel users:</Box> 
                        <Box component={'span'}>{coin.community_data.telegram_channel_user_count}</Box>
                    </Box>
                }
                 {coin.community_data.twitter_followers &&
                     <Box p="10px">
                        <Box component={'span'} fontWeight="bold" mr="5px">Twitter followers:</Box> 
                        <Box component={'span'}>{coin.community_data.twitter_followers}</Box>
                    </Box>
                }
            </Box>
            : <Box component="p">No data available</Box>
        }
    </>
))


export default CoinDetailCommunityData;