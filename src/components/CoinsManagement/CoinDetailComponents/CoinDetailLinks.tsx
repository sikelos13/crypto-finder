import React from 'react';
import { Box } from '@material-ui/core';
import { CoinDetailedNormalized } from '../../../api/types/CoinDetailedNormalized';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import ForumIcon from '@material-ui/icons/Forum';

interface CoinDetailLinksProps {
    coin: CoinDetailedNormalized;
}

const CoinDetailLinks: React.FC<CoinDetailLinksProps> = (({ coin }: CoinDetailLinksProps) => (
    <>
        {coin.links
            ? <Box display="flex" flexDirection="row" alignItems="end" justifyContent="center">
                {coin.links.homepage &&
                    <IconButton href={coin.links.homepage} target="_blank" style={{ padding: '0', marginRight: '10px'}}>
                        <LanguageIcon color="primary" />
                    </IconButton>
                }
                {coin.links.official_forum_url &&
                    <IconButton href={coin.links.official_forum_url} target="_blank" style={{ padding: '0', marginRight: '10px'}}>
                        <ForumIcon color="primary" />
                    </IconButton>
                }
                {coin.links.twitter_screen_name &&
                    <IconButton href={`https://twitter.com/${coin.links.twitter_screen_name}`} target="_blank" style={{ padding: '0', marginRight: '10px'}}>
                        <TwitterIcon color="primary" />
                    </IconButton>
                }
                {coin.links.facebook_username &&
                    <IconButton href={`https://www.facebook.com/${coin.links.facebook_username}/`} target="_blank" style={{ padding: '0', marginRight: '10px'}}>
                        <FacebookIcon color="primary" />
                    </IconButton>
                }
            </Box>
            : <Box component="p">No links available</Box>
        }
    </>
))


export default CoinDetailLinks;