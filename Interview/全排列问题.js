//全排列问题（回溯递归）
// 输入：[1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
function permute(nums) {
    const result = [];

    function backtrack(path, options) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < options.length; i++) {
            // 选择
            path.push(options[i]);
            // 剩余可选项
            const remaining = options.slice(0, i).concat(options.slice(i + 1));
            // 递归
            backtrack(path, remaining);
            // 回溯
            path.pop();
        }
    }

    backtrack(1, nums);
    return result;
}
