// https://programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  var answer = [];
  const users = new Object();
  record.map(userRecord => {
    const userInfo = userRecord.split(' ');
    if (userInfo[0] === 'Enter') {
      answer.push(`${userInfo[1]}님이 들어왔습니다.`)
      users[userInfo[1]] = userInfo[2];
    } else if (userInfo[0] === 'Leave') {
      answer.push(`${userInfo[1]}님이 나갔습니다.`)
    } else {
      users[userInfo[1]] = userInfo[2];
    }
  });

  answer.map((message, i) => {
    const targetUserName = message.slice(0,message.indexOf('님'));
    answer[i] = message.replace(targetUserName, users[targetUserName]);
  })

  return answer;
}

var test = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];
solution(test);
/*

제한사항
record는 다음과 같은 문자열이 담긴 배열이며, 길이는 1 이상 100,000 이하이다.
다음은 record에 담긴 문자열에 대한 설명이다.
모든 유저는 [유저 아이디]로 구분한다.
[유저 아이디] 사용자가 [닉네임]으로 채팅방에 입장 - "Enter [유저 아이디] [닉네임]" (ex. "Enter uid1234 Muzi")
[유저 아이디] 사용자가 채팅방에서 퇴장 - "Leave [유저 아이디]" (ex. "Leave uid1234")
[유저 아이디] 사용자가 닉네임을 [닉네임]으로 변경 - "Change [유저 아이디] [닉네임]" (ex. "Change uid1234 Muzi")
첫 단어는 Enter, Leave, Change 중 하나이다.
각 단어는 공백으로 구분되어 있으며, 알파벳 대문자, 소문자, 숫자로만 이루어져있다.
유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.
유저 아이디와 닉네임의 길이는 1 이상 10 이하이다.
채팅방에서 나간 유저가 닉네임을 변경하는 등 잘못 된 입력은 주어지지 않는다.

record
["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
result
["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

*/


// 다른이풀이

function solution(record) {
  const userInfo = {};
  const action = [];
  const stateMapping = {
      'Enter': '님이 들어왔습니다.',
      'Leave': '님이 나갔습니다.'
  }

  record.forEach((v) => {
      const [state, id, nick] = v.split(' ');

      if(state !== "Change") {
          action.push([state, id]);
      }

      if(nick) {
          userInfo[id] = nick;
      }
  })

  return action.map(([state, uid]) => {
      return `${userInfo[uid]}${stateMapping[state]}`;
  })
}