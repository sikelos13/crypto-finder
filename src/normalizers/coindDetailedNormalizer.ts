
import { CoinDetailed } from "../api/types/CoinDetailed";
import { CoinDetailedNormalized } from "../api/types/CoinDetailedNormalized";
import { DateFormat } from "../utils/DateFormat";

export const normalizeCoinDetailed = (item: CoinDetailed) => {

    const coinExtended= {
        name: item.name,
        id: item.id,
        current_price: item.market_data && item.market_data.current_price['usd'] ? `${item.market_data.current_price['usd']} USD` : 'N/A',
        links: item.links ? getLinks(item) : undefined,
        community_data:  getCommunityData(item),
        description: item.description && item.description['en'] ? item.description['en'] : 'No description available',
        developer_data: getDeveloperData(item),
        market_data: getMarketData(item),
        sentiment_votes_up_percentage: item.sentiment_votes_up_percentage ? `${String(item.sentiment_votes_up_percentage)} %` : 'N/A',
        sentiment_votes_down_percentage: item.sentiment_votes_down_percentage ? `${String(item.sentiment_votes_down_percentage)} %` : 'N/A'
    } as CoinDetailedNormalized;

    return coinExtended;
}

const getCommunityData = (item: CoinDetailed) => {
    return {
        facebook_likes: item.community_data && item.community_data.facebook_likes ? item.community_data.facebook_likes : 'N/A',
        reddit_subscribers: item.community_data && item.community_data.reddit_subscribers ? item.community_data.reddit_subscribers : 'N/A',
        telegram_channel_user_count: item.community_data && item.community_data.telegram_channel_user_count ? item.community_data.telegram_channel_user_count : 'N/A',
        twitter_followers: item.community_data && item.community_data.twitter_followers ? item.community_data.twitter_followers : 'N/A',
    }
}

const getLinks = (item: CoinDetailed) => {
    return {
        homepage: item.links.homepage[0] ? item.links.homepage[0] : '',
        official_forum_url: item.links.official_forum_url[0] ? item.links.official_forum_url[0] : '',
        twitter_screen_name: item.links.twitter_screen_name ? item.links.twitter_screen_name : '',
        facebook_username: item.links.facebook_username ? item.links.facebook_username : '',
        subreddit_url: item.links.subreddit_url ? item.links.subreddit_url : '',
        github_url: item.links.repos_url && item.links.repos_url.github.length > 0 ? item.links.repos_url.github[0]: ''
    }
}

const getDeveloperData = (item: CoinDetailed) => {
    return {
        closed_issues: item.developer_data  && item.developer_data.closed_issues ? item.developer_data.closed_issues : 'N/A',
        forks: item.developer_data  && item.developer_data.forks ? item.developer_data.forks : 'N/A',
        stars: item.developer_data  && item.developer_data.stars ? item.developer_data.stars : 'N/A',
        subscribers: item.developer_data  && item.developer_data.subscribers ? item.developer_data.subscribers : 'N/A',
        total_issues: item.developer_data  && item.developer_data.total_issues ? item.developer_data.total_issues : 'N/A'
    }
}

const getMarketData = (item: CoinDetailed) => {
    return {
        highest_price_since_creation: item.market_data && item.market_data.ath['usd'] && item.market_data.ath_date['usd'] ? `${String(item.market_data.ath['usd'])} USD on ${DateFormat.normalize(item.market_data.ath_date['usd'])}` : 'N/A',
        lowest_price_since_creation: item.market_data  && item.market_data.atl['usd'] && item.market_data.atl_date['usd'] ? `${String(item.market_data.atl['usd'])} USD on ${DateFormat.normalize(item.market_data.atl_date['usd'])}` : 'N/A',
        high_24h: item.market_data  && item.market_data.high_24h['usd'] ? `${String(item.market_data.high_24h['usd'])} USD` : 'N/A',
        low_24h: item.market_data  && item.market_data.low_24h['usd'] ? `${String(item.market_data.low_24h['usd'])} USD` : 'N/A',
        price_change_percentage_24h: item.market_data  && item.market_data.price_change_percentage_24h ? (item.market_data.price_change_percentage_24h).toFixed(2) : 'N/A',
        price_change_percentage_7d: item.market_data && item.market_data.price_change_percentage_7d ? (item.market_data.price_change_percentage_7d).toFixed(2) : 'N/A',
        price_change_percentage_14d: item.market_data  && item.market_data.price_change_percentage_14d ?(item.market_data.price_change_percentage_14d).toFixed(2) : 'N/A',
        price_change_percentage_30d: item.market_data  && item.market_data.price_change_percentage_30d ? (item.market_data.price_change_percentage_30d).toFixed(2) : 'N/A',
        price_change_percentage_60d: item.market_data  && item.market_data.price_change_percentage_60d ? (item.market_data.price_change_percentage_60d).toFixed(2) : 'N/A',
        price_change_percentage_200d: item.market_data  && item.market_data.price_change_percentage_200d ? (item.market_data.price_change_percentage_200d).toFixed(2) : 'N/A',
        price_change_percentage_1y: item.market_data  && item.market_data.price_change_percentage_1y ? (item.market_data.price_change_percentage_1y).toFixed(2) : 'N/A'
    }
}