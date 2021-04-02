
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
    official_forum_url: string;
    twitter_screen_name: string;
    facebook_username: string;
}

interface DeveloperDataNormalized {
    [key: string]: number | null;
    closed_issues: number | null;
    forks: number | null;
    stars: number | null;
    subscribers: number | null;
    total_issues: number | null;
}

interface CommunityDataNormalized {
    [key: string]: number | null;
    facebook_likes: number | null;
    reddit_subscribers: number | null;
    telegram_channel_user_count: number | null;
    twitter_followers: number | null;
}

interface MarketDataNormalized {
    [key: string]: string | number;
    highest_price_since_creation: string;
    lowest_price_since_creation: string;
    high_24h: string | number;
    low_24h: string | number;
    price_change_percentage_24h: string | number;
    price_change_percentage_7d: string | number;
    price_change_percentage_14d: string | number;
    price_change_percentage_30d: string | number;
    price_change_percentage_60d: string | number;
    price_change_percentage_200d: string | number;
    price_change_percentage_1y: string | number;
}