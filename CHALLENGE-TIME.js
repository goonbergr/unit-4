/*
    ? Challenge
    two params, arr and search
    iterate through
    check if search param is found in array
    return true if found
    return false if not
*/

function findValue(arr, search) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      return true;
    }
  }
  return false;
}
