import React, { useState } from 'react';
import './App.css';
import Gamebox from './component/Gamebox';

/* 
    1. box 2개(title/이미지/결과값)
    2. 가위/바위/보 버튼 -> user
    3. 버튼을 클릭하면 선택된 버튼과 동일한 이미지가 박스에 보임
    4. 컴퓨터는 랜덤한 값으로 아이템을 선택
    5. 3~4의 결과로 승패
    6. 승패의 결과에 따라서 박스 테두리 색이 변함(승:red, 패:blue, 무:black) 
*/

const choice = {
  rock: {
    name: "Rock",
    img: 'https://mnmsoft.co.kr/friendvs/images/2.png'
  },
  scissors: {
    name: "Scissors",
    img: 'https://mnmsoft.co.kr/friendvs/images/1.png'
  },
  page: {
    name: "Page",
    img: 'https://mnmsoft.co.kr/friendvs/images/3.png'
  },
}




function App() {
  //user가 선택하는 버튼 값
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState('') //승패결과




  //가위바위보 버튼을 클릭하면 아이템 선택
  const play = (userChoice) => {
    //console.log('click', userChoice)
    setUserSelect(choice[userChoice]) //user가 선택

    //컴퓨터의 선택값
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)

    setResult(judement(choice[userChoice], computerChoice))
  }

  //컴퓨터의 랜덤한 이미지 선택값
  const randomChoice = ()=> {
    let itemArray = Object.keys(choice) //object.key 메소드는 객체의 키값만 추출해서 배열로 만들어주는 메소드
    //console.log('itemArray', itemArray)
    
    //생성된 배열의 인덱스 0,1,2 사이에서 랜덤한 값 하나를 받아옴
    let randomItem = Math.floor(Math.random()*itemArray.length)
    //console.log('randomItem', randomItem)
    
    let final = itemArray[randomItem]
    //console.log('final', final)

    return choice[final]
  }

  //승패가리기 함수
  const judement = (user, computer) => {
    console.log('user :' ,user ,'computer :' , computer)

    //승패가리기 로직
    //user == computer => tie
    //user == rock / computer ==scissors => user win
    //user == rock / computer ==page => user lose
    //user == scissors / computer ==page => user win
    //user == scissors / computer ==rock => user lose
    //user == page / computer ==rock => user win
    //user == page / computer ==scissors => user lose

/*     if (user.name == computer.name) {
      return "tie"
    } else if (user.name == "Rock") {
      if (computer.name == "Scissors") {
        return "win"
      } else {
        return "lose"
      }
    } */

    if (user.name == computer.name) {
      return "tie"
    } else if (user.name == "Rock") return (computer.name =="Scissors" ? "WIN" : "LOSE")
    else if (user.name == "Scissors") return (computer.name =="Page" ? "WIN" : "LOSE")
    else if (user.name == "Page") return (computer.name =="Rock" ? "WIN" : "LOSE")
  }




  return (
    <div className="container">
      <div className="main">
        <Gamebox title="you" item={userSelect} result={result}/>
        <Gamebox title="computer" item={computerSelect } result={result}/>
      </div>
      <div className="main">
        <button onClick={()=>play("scissors")}>가위</button> {/* play("Scissors") 이렇게만하면 한번실행하기때문에 콜백함수를써야함 */}
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("page")}>보</button>
      </div>
    </div>
  );
}

export default App;