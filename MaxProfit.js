function maxProfit(prices, k) {
    const n = prices.length;
    if (n === 0 || k === 0) return 0;

    const dp = Array.from({ length: k + 1 }, () => Array(n).fill(0));

    for (let i = 1; i <= k; i++) {
        let maxDiff = -prices[0];
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxDiff);
            maxDiff = Math.max(maxDiff, dp[i - 1][j] - prices[j]);
        }
    }

    return dp[k][n - 1];
}

const prices = [3, 2, 6, 5, 0, 3];
const k = 2;
const maxProfitValue = maxProfit(prices, k);
console.log("Keuntungan maksimum: " + maxProfitValue);
