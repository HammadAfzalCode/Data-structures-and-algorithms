function moveOdds(arr) {
  let odds = [];
  let evens = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odds[odds.length] = arr[i];
    } else {
      evens[evens.length] = arr[i];
    }
  }

  let index = 0;

  for (let i = 0; i < odds.length; i++) {
    arr[index] = odds[i];
    index++;
  }
  for (let i = 0; i < evens.length; i++) {
    arr[index] = evens[i];
    index++;
  }
  return arr;
}
