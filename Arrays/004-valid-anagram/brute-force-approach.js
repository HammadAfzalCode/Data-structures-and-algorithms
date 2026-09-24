function validAnagram(s, t) {
  if (s.length == !t.length) return false;

  let tArray = t.split("");

  for (let i = 0; i < s.length; i++) {
    let foundMatch = false;

    for (let j = 0; j < tArray.length; j++) {
      if (s[i] === tArray[j]) {
        tArray.splice(j, 1);
        foundMatch = true;
        break;
      }
    }
    if (!foundMatch) return false;
  }
  return true;
}

// time complexity is 0(n^2)
