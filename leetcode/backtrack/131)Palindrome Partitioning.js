/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  const path = [];

  const isPalindrome = str => {
    let count = 0;
    let length = str.length - 1;
    while (count < length) {
      if (str[count] !== str[length]) return false;
      count++;
      length--;
    }
    return true;
  };

  const backtrack = start => {
    if (start === s.length) {
      result.push([...path]);
      return;
    }

    for (let end = start + 1; end <= s.length; end++) {
      const substr = s.slice(start, end);
      if (isPalindrome(substr)) {
        path.push(substr);
        backtrack(end);
        path.pop();
      }
    }
  };

  backtrack(0);
  return result;
};

partition('aab');
partition('a');
partition('cdd');
