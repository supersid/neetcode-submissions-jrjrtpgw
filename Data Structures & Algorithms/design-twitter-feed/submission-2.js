class Twitter {
    constructor() {
        this.tweets = new Map();
        this.followers = new Map();
        this.timestamp = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.timestamp++;
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }
        this.tweets.get(userId).push([tweetId, this.timestamp]);
    }
    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let feedUsers = this.followers.get(userId) || new Set();
        feedUsers.add(userId);
        const feed = new PriorityQueue((a, b) => b[1] - a[1]);
        feedUsers.forEach((user) => {
            const tweets = this.tweets.get(user) || [];
            tweets.forEach(([tweetId, timestamp]) => {
                feed.enqueue([tweetId, timestamp]);
            });
        });

        const result = [];
        while (result.length < 10 && feed.size() > 0) {
            result.push(feed.dequeue()[0]);
        }
        return result;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.followers.has(followerId)) {
            this.followers.set(followerId, new Set());
        }
        this.followers.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followers.has(followerId)) {
            this.followers.get(followerId).delete(followeeId);
        }
    }
}
