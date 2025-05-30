// https://leetcode.com/problems/flood-fill/description/
// https://www.youtube.com/watch?v=OODFEqJxiDo
// You are given an image represented by an m x n grid of integers image, where image[i][j] represents the pixel value of the image. You are also given three integers sr, sc, and color. Your task is to perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill:

// Begin with the starting pixel and change its color to color.
// Perform the same process for each pixel that is directly adjacent (pixels that share a side with the original pixel, either horizontally or vertically) and shares the same color as the starting pixel.
// Keep repeating this process by checking neighboring pixels of the updated pixels and modifying their color if it matches the original color of the starting pixel.
// The process stops when there are no more adjacent pixels of the original color to update.
// Return the modified image after performing the flood fill.

// Example 1:
// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]

var floodFill = function (image, sr, sc, color) {
  const original = image[sr][sc];

  function recursive(image, sr, sc) {
    if (
      sr < 0 ||
      sr > image.length - 1 ||
      sc < 0 ||
      sc > image[0].length - 1 ||
      image[sr][sc] !== original ||
      image[sr][sc] === color
    ) {
      return image;
    }

    image[sr][sc] = color;
    recursive(image, sr + 1, sc);
    recursive(image, sr - 1, sc);
    recursive(image, sr, sc + 1);
    recursive(image, sr, sc - 1);

    return image;
  }

  return recursive(image, sr, sc);
};
