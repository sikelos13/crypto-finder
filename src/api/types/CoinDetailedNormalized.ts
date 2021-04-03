
type NormalizedData  = string | number | null;
export interface CoinDetailedNormalized {
    name: string
    current_price: string;
    id: string;
    links: CoinLinksNormalized;
    community_data: CommunityDataNormalized;
    description: string;
    developer_data: DeveloperDataNormalized;
    market_data: MarketDataNormalized;
    sentiment_votes_down_percentage: string;
    sentiment_votes_up_percentage: string;
}

interface CoinLinksNormalized {
    homepage: string;
    subreddit_url: string;
    official_forum_url: string;
    twitter_screen_name: string;
    facebook_username: string;
}

interface DeveloperDataNormalized {
    [key: string]: NormalizedData;
    closed_issues: NormalizedData;
    forks: NormalizedData;
    stars: NormalizedData;
    subscribers: NormalizedData;
    total_issues: NormalizedData
}

interface CommunityDataNormalized {
    [key: string]: NormalizedData
    facebook_likes: NormalizedData;
    reddit_subscribers: NormalizedData;
    telegram_channel_user_count: NormalizedData;
    twitter_followers: NormalizedData;
}

interface MarketDataNormalized {
    [key: string]: NormalizedData;
    highest_price_since_creation: NormalizedData;
    lowest_price_since_creation: NormalizedData;
    high_24h: NormalizedData;
    low_24h: NormalizedData;
    price_change_percentage_24h: NormalizedData;
    price_change_percentage_7d: NormalizedData;
    price_change_percentage_14d: NormalizedData;
    price_change_percentage_30d: NormalizedData;
    price_change_percentage_60d: NormalizedData;
    price_change_percentage_200d: NormalizedData;
    price_change_percentage_1y: NormalizedData;
}