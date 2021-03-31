import React from 'react';
import { Box, FormLabel } from '@material-ui/core';
import { CoinDetailed } from '../../../api/types/CoinDetailed';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import ForumIcon from '@material-ui/icons/Forum';

interface CoinDetailLinksProps {
    coin: CoinDetailed;
}

const CoinDetailLinks: React.FC<CoinDetailLinksProps> = (({ coin }: CoinDetailLinksProps) => (
    <>
        {coin && coin.links
            ? <Box display="flex" flexDirection="row" alignItems="center">
                  {coin.links.homepage.length > 0 && coin.links.homepage[0] !== "" &&
                    <IconButton href={coin.links.homepage[0]} target="_blank">
                        <LanguageIcon color="primary" />
                    </IconButton>
                }
                 {coin.links.official_forum_url.length > 0 && coin.links.official_forum_url[0] !== "" &&
                    <IconButton href={coin.links.official_forum_url[0]} target="_blank">
                        <ForumIcon color="primary" />
                    </IconButton>
                }
                {coin.links.twitter_screen_name && 
                    <IconButton href={`https://twitter.com/${coin.links.twitter_screen_name}`} target="_blank">
                        <TwitterIcon color="primary" />
                    </IconButton>
                }
                {coin.links.facebook_username && 
                    <IconButton href={`https://www.facebook.com/${coin.links.facebook_username}/`} target="_blank">
                        <FacebookIcon color="primary" />
                    </IconButton>
                }
            </Box>
            : <Box component="p">No links available</Box>
        }
    </>
))


export default CoinDetailLinks;