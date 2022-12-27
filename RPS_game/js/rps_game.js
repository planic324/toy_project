document.addEventListener('DOMContentLoaded', () =>{

    // swiper
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 0,
      slidesPerView: "auto",
      freeMode: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },        
    });

    // 게임 기본 스피드 0.3초로 설정

    // 게임 회차 및 승패 정보 저장
    let count = 0;
    let winCount = 0;
    let drawCount = 0;
    let loseCount = 0;
    let playerScore = 0;
    let pcScore = 0;

    let playerLife = 3;

    let lastPcSelection = "";
    let pcSelection = "";

    let timer = 0;
    let speed = 300;

    // PC를 랜덤으로 뽑아주는 것
    function getRandom() {
      return parseInt(Math.random() * 3); // (max - min) + min : max는 3, min은 0
    }

    // 게임을 시작/재시작 하는 함수
    function changePcSelection() {
      // 생성된 난수를 PC의 선택 값으로 설정
      // 이전 값과 동일하지 않은 경우에만 PC가 선택하도록 구현
      while (true) {
          pcSelection = getRandom();
  
          if (pcSelection !== lastPcSelection) {
              lastPcSelection = pcSelection; // 다음 순서에 비교값으로 사용하기 위하여 저장
              break;
          }
      }
  
      // 화면 이미지 변경
      switch (pcSelection) {
          case 0:
              pcImage.src = "img/scissors.png";
              pcImage.alt = "컴퓨터 선택: 가위";
              break;
  
          case 1:
              pcImage.src = "img/rock.png";
              pcImage.alt = "컴퓨터 선택: 바위";
              break;
  
          case 2:
              pcImage.src = "img/paper.png";
              pcImage.alt = "컴퓨터 선택: 보";
              break;
  
          default:
      }
    }
    

    // 버튼을 눌러서 게임하는 방법
    const buttonBox = document.getElementsByClassName("controlBox")[0] // 컨트롤 박스
    const buttonScissors = document.getElementById("buttonScissors") //가위
    const buttonRock = document.getElementById("buttonRock") //바위
    const buttonPaper = document.getElementById("buttonPaper") //보

    let closeTimerState = 0;

    buttonBox.addEventListener("click", function(e){
      let playerSelection = "";

      // 버튼 맵핑 작업
      if (e.target === buttonScissors){
        playerSelection = 0;
        console.log('0')
      } else if (e.target === buttonRock){
        playerSelection = 1;
        console.log('1')
      } else if (e.target === buttonPaper){
        playerSelection = 2; 
        console.log('2')
      } else {
        return;
      }
      rockPaperSissors(playerSelection);
    })

    // 가위 바위 보 메인 계산 함수
    function rockPaperSissors(playerSelection) {
      // 게임 카운트 +1
      count++;

      // Interval 정지
      clearInterval(timer);

      // 대진 결과 판단 (사용자 패 : 0, 무 : 1, 사용자 승 : 2)
      let result = gameCheckResult(playerSelection, pcSelection);

    }

    // 대진 결과 판단 (가위 : 0 // 바위 : 1 // 보 : 2)
    function gameCheckResult(player, pc){
      let result = player - pc;

      if (result === 0 ){
        drawCount ++;       
        console.log('무승부')                           // 무승부
        return 1;
      }else if (result === -2 || result === 1) {       // 사용자가 승리한 경우
          winCount++;
          console.log('플레이어 승')
          return 2;
      } else if (result === -1 || result === 2) {      // 사용자가 패배한 경우
          loseCount++;
          console.log('플레이어 패배')
          return 0;
      }
    }

    

    
    
    // Control Box
    
    const pcImage = document.getElementById("pc-image"); // 이미지 변경되는 박스 타겟팅

    window.onload = function(){
      timer = setInterval(changePcSelection, speed);
    }
    

})
