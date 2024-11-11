const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;

    // Helper function to perform DFS
    const dfs = (r, c) => {
        // Boundary and condition check
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 'W') {
            return;
        }
        // Mark the cell as visited by changing 'L' to 'W'
        grid[r][c] = 'W';

        // Explore neighbors
        dfs(r + 1, c); // down
        dfs(r - 1, c); // up
        dfs(r, c + 1); // right
        dfs(r, c - 1); // left
    };

    // Iterate through each cell in the grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Start a new DFS if we find an unvisited 'L'
            if (grid[r][c] === 'L') {
                dfs(r, c);  // Mark all connected land cells
                islandCount += 1;  // Increment island count for each new island found
            }
        }
    }

    return islandCount;
};

module.exports = getTotalIsles;

  // write your code here

};

module.exports = getTotalIsles;