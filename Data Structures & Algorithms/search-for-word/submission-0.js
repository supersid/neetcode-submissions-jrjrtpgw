class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const visited = Array.from({ length: board.length }, () =>
            Array.from({ length: board[0].length }, () => false),
        );

        function dfs(r, c, i) {
            if (i === word.length) return true;

            if (r < 0 || r >= board.length || c < 0 || c >= board[0].length) return false;

            if (visited[r][c]) return false;

            if (word[i] !== board[r][c]) return false;

            visited[r][c] = true;
            const found =
                dfs(r - 1, c, i + 1) ||
                dfs(r + 1, c, i + 1) ||
                dfs(r, c - 1, i + 1) ||
                dfs(r, c + 1, i + 1);
            visited[r][c] = false;
            return found;
        }
        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                if (dfs(r, c, 0)) return true;
            }
        }
        return false;
    }
}
