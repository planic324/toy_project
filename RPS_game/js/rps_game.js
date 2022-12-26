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

    const timer = 0;
    const speed = 300;

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

    function getRandom() {
      return parseInt(Math.random() * 3); // (max - min) + min : max는 3, min은 0
    }    
    
    // Control Box
    
    const pcImage = document.getElementById("pc-image"); // 이미지 변경되는 박스 타겟팅

    window.onload = function(){
      timer = setInterval(changePcSelection, speed);
    }
    

})
