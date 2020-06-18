import React, { Component } from 'react';
import style from "./SnakeGame.module.css"
import Snake from "./components/Snake";
import Food from "./components/Food";
import Lottie from 'react-lottie';
import Button from "../../Ui/Button/Button";
import * as check from "./components/check.json";

const getRandomCoordinates = () => {
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random()*(max-min+1)+min)/4)*4;
    let y =  Math.floor((Math.random()*(max-min+1)+min)/4)*4;
    return [x,y]
  }
  
  const initialState = {
    start: false,
    food: getRandomCoordinates(),
    speed: 200,
    direction: 'RIGHT',
    snakeDots: [
      [0,0],
      [4,0]
    ]
  }
  
  class SnakeGame extends Component {
  
    state = initialState;
  
    // componentDidMount() {
    //     setInterval(this.moveSnake, this.state.speed);
    //     document.onkeydown = this.onKeyDown;
    // }

    start() {
        setInterval(this.moveSnake, this.state.speed);
        document.onkeydown = this.onKeyDown; 
    }
  
    componentDidUpdate() {
      this.checkIfOutOfBorders();
      this.checkIfCollapsed();
      this.checkIfEat();
    }
  
    onKeyDown = (e) => {
      e = e || window.event;
      if(e.keyCode === 38) {
        this.setState({direction: 'UP'});
      } else if (e.keyCode === 40) {
        this.setState({direction: 'DOWN'});
      } else if (e.keyCode === 37) {
        this.setState({direction: 'LEFT'});
      } else if (e.keyCode === 39) {
        this.setState({direction: 'RIGHT'});
      }
    }
  
    moveSnake = () => {
      let dots = [...this.state.snakeDots];
      let head = dots[dots.length - 1];
    
      if (this.state.direction === 'RIGHT') {
        head = [head[0] + 4, head[1]];
      } else if (this.state.direction === 'LEFT') {
        head = [head[0] - 4, head[1]];
      }  else if (this.state.direction === 'DOWN') {
        head = [head[0], head[1] + 4];
      }  else if (this.state.direction === 'UP') {
        head = [head[0], head[1] - 4];
      }

      dots.push(head);
      dots.shift();
      this.setState({
        snakeDots: dots
      })
    }
  
    checkIfOutOfBorders() {
      let head = this.state.snakeDots[this.state.snakeDots.length - 1];
      if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
        this.onGameOver();
      }
    }
  
    checkIfCollapsed() {
      let snake = [...this.state.snakeDots];
      let head = snake[snake.length - 1];
      snake.pop();
      snake.forEach(dot => {
        if (head[0] === dot[0] && head[1] === dot[1]) {
          this.onGameOver();
        }
      })
    }
  
    checkIfEat() {
      let head = this.state.snakeDots[this.state.snakeDots.length - 1];
      let food = this.state.food;
      if (head[0] === food[0] && head[1] === food[1]) {
        this.setState({
          food: getRandomCoordinates()
        })
        this.enlargeSnake();
        this.increaseSpeed();
      }
    }
  
    enlargeSnake() {
      let newSnake = [...this.state.snakeDots];
      newSnake.unshift([])
      this.setState({
        snakeDots: newSnake
      })
    }
  
    increaseSpeed() {
      if (this.state.speed > 10) {
        this.setState({
          speed: this.state.speed - 10
        })
      }
    }
  
    onGameOver() {
      if(this.state.snakeDots.length <= 11) {
        this.setState(initialState)
        this.setState({start: true})
      }
        
    }

    render() {
        return (
                <div className={style.gameWrapper}>
                  <div className={style.gameArea}>
                  
                      {this.state.start ?  
                         null :  <div className={style.startGame} >
                          <Button
                              action={() => {
                                  this.start()
                                  this.setState({start: true})
                              }} 
                              button={"button"} 
                              content={<span className={style.btnText}>start</span>} 
                              height={86}/>
                      </div>}
                      {this.state.snakeDots.length >= 12 ? 
                        <div className={style.finished}><p>Gerestaureerd!</p>
                         <Lottie height={70} width={70} style={{margin: 0}} options={{
                            loop: false,
                            autoplay: true,
                            animationData: check.default}}/>
                         </div> :
                        <>
                          <Snake snakeDots={this.state.snakeDots}/>
                          <Food dot={this.state.food}/>
                        </>}
                    </div>
                    
                    <div className={style.controls}>
                      <p className={style.score}>{this.state.snakeDots.length - 2}</p>
                      <div className={style.buttonWrapper}>
                       
                        <div className={style.btnUp} >
                            <Button
                                action={() => this.setState({direction: 'UP'})}
                                button={"square"} 
                                content={
                                    <img className={style.up} alt="arrow" src="./assets/arrow.svg" />
                                }  
                                width={92}
                                height={86}/>
                        </div>
                        <div className={style.btnLeft}>
                            <Button 
                                action={() => this.setState({direction: 'LEFT'})}
                                button={"square"} 
                                content={
                                    <img className={style.left} alt="arrow" src="./assets/arrow.svg" />
                                } 
                                width={92}
                                height={86}/>
                        </div> 
                        <div  className={style.btnDown}>         
                            <Button 
                                action={() => this.setState({direction: 'DOWN'})}
                                button={"square"} 
                                content={
                                    <img className={style.down} alt="arrow" src="./assets/arrow.svg" />
                                } 
                                width={92}
                                height={86}/>               
                        </div>
                        <div  className={style.btnRight}>
                            <Button 
                                action={() => this.setState({direction: 'RIGHT'})}
                                button={"square"} 
                                content={
                                    <img alt="arrow" src="./assets/arrow.svg" />
                                } 
                                width={92}
                                height={86}/>
                        </div>
                      </div>
                </div>
            </div>
        )
    }
}

export default SnakeGame;