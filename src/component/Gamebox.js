import React from 'react'

const Gamebox = (props) => {
    //console.log(props)
    let result;

    //선택값이 컴퓨터가 이기는경우, 경기결과가 무승부인경우, 경기결과값이 있을때
    if (props.title.toLowerCase() === 'computer' //현재 타이틀 상태가 computer일때
    && props.result !== 'tie'  // 경기결과가 무승부일때
    && props.result !== '') { //경기결과값이 있을때
        result = props.result === "WIN" ? "LOSE" : "WIN"
    } else {
        result = props.result
    }

    console.log(result)
  return (
    <div className={`gameBox ${result}`}>
        <h1>{props.title}</h1>
        <div className="imgBox">
            {/* 그냥 바로 props.itme.img하면 null상태때문에 리액트가 오류나기때문에 아래와같이 보호하고시작하는게 좋음 */}
            {props.item ? (<img src={props.item.img} alt={props.item.name} />) : (<img src='https://img.freepik.com/premium-photo/3d-button-start-button-3d-illustration_115990-2537.jpg' alt='시작' className='default'></img>)}
            
        </div>
        <h2>{result}</h2>
    </div>
  )
}

export default Gamebox