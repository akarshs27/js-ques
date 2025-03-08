// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
// In this case, the max area of water (blue section) the container can contain is 49.

// https://www.youtube.com/watch?v=FtrorVKobgw

function maxArea(height) {
    let area = 0;
    let i = 0;
    let j = height.length - 1;

    while(i < j) {
        let temp = ( j - i) * Math.min(height[i], height[j]);
        area = Math.max(area, temp);

        if(height[i] > height[j]) {
            j--;
        } else {
            i++;
        }
    }

    return area;
}