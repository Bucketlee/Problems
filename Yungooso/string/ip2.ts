// ip 문제 다른 풀이방식으로 풀어보기

function getAllValidIps(ipString: string): string[] {
  const result: string[] = [];

  for (let i = 1; i < 4; i += 1) {
    const firstPart = ipString.slice(0, i);
    if (!isValidPart(firstPart)) {
      continue;
    }

    for (let i2 = 1; i2 < 4; i2 += 1) {
      const secondPart = ipString.slice(i, i + i2);
      if (!isValidPart(secondPart)) {
        continue;
      }

      for (let i3 = 1; i3 < 4; i3 += 1) {
        const thirdPart = ipString.slice(i + i2, i + i2 + i3);
        if (!isValidPart(thirdPart)) {
          continue;
        }

        const fourthPart = ipString.slice(i + i2 + i3);
        if (isValidPart(fourthPart)) {
          result.push(`${firstPart}.${secondPart}.${thirdPart}.${fourthPart}`);
        }
      }
    }
  }

  return result;
}

function isValidPart(numberString: string): boolean {
  return !(numberString.length > 3 || +numberString > 255 || (numberString[0] === '0' && numberString.length >= 2));
}

console.log(getAllValidIps('19216801'));
