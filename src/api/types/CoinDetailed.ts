export interface CoinDetailed {
    additional_notices: any;
    asset_platform_id: string;
    block_time_in_minutes: number;
    categories: string[];
    coingecko_rank: number;
    coingecko_score: number;
    community_data: CommunityData;
    community_score: number;
    contract_address: string;
    country_origin: string
    description: any;
    developer_data: DeveloperData;
    developer_score: number;
    genesis_date: string | null
    hashing_algorithm: any
    id: string
    image: CoinImage;
    last_updated: Date;
    links: CoinLinks;
    liquidity_score: number;
    localization: any
    market_cap_rank: number;
    market_data: any
    name: string
    platforms: any
    public_interest_score: number;
    public_interest_stats: any;
    public_notice: any;
    sentiment_votes_down_percentage: number
    sentiment_votes_up_percentage: number
    status_updates: any;
    symbol: string;
    tickers: any;
}

interface CommunityData {
    facebook_likes: number | null;
    reddit_accounts_active_48h: number | null;
    reddit_average_comments_48h: number | null;
    reddit_average_posts_48h: number | null;
    reddit_subscribers: number | null;
    telegram_channel_user_count: number | null;
    twitter_followers: number | null;
}

interface DeveloperData {
    closed_issues: number | null;
    code_additions_deletions_4_weeks: {additions: null, deletions: null}
    commit_count_4_weeks: number | null;
    forks: number | null;
    last_4_weeks_commit_activity_series: any;
    pull_request_contributors: number | null;
    pull_requests_merged: number | null;
    stars: number | null;
    subscribers: number | null;
    total_issues: number | null;
}

interface CoinImage {
    large: string;
    small: string;
    thumb: string;
}

interface CoinLinks {
    announcement_url: string[];
    bitcointalk_thread_identifier: any;
    blockchain_site: string[];
    chat_url: string[];
    facebook_username: string;
    homepage: string[];
    official_forum_url: string[];
    repos_url: any
    subreddit_url: any
    telegram_channel_identifier: string;
    twitter_screen_name: string;
}