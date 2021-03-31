import React from 'react';
import { Box } from '@material-ui/core';
import { CoinDetailed } from '../../../api/types/CoinDetailed';

interface CoinDetailCommunityDataProps {
    coin: CoinDetailed;
}

const CoinDetailCommunityData: React.FC<CoinDetailCommunityDataProps> = (({ coin }: CoinDetailCommunityDataProps) => (
    <>
        {coin && coin.community_data
            ? <Box display="flex" flexDirection="column">
                  {coin.community_data.facebook_likes &&
                     <Box p="10px">
                        <Box component={'span'} fontWeight="bold">Facebook likes:</Box> <Box component={'span'}>{coin.community_data.facebook_likes}</Box>
                    </Box>
                }
                {coin.community_data.reddit_subscribers && 
                    <Box p="10px">
                        <Box component={'span'} fontWeight="bold">Reddit subscribers:</Box> <Box component={'span'}>{coin.community_data.reddit_subscribers}</Box>
                    </Box>
                }
                {coin.community_data.telegram_channel_user_count &&
                     <Box p="10px">
                        <Box component={'span'} fontWeight="bold">Telegram channel users:</Box> <Box component={'span'}>{coin.community_data.telegram_channel_user_count}</Box>
                    </Box>
                }
                 {coin.community_data.twitter_followers &&
                     <Box p="10px">
                        <Box component={'span'} fontWeight="bold">Twitter followers:</Box> <Box component={'span'}>{coin.community_data.twitter_followers}</Box>
                    </Box>
                }
            </Box>
            : <Box component="p">No data available</Box>
        }
    </>
))


export default CoinDetailCommunityData;