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

    // 게임 기본 스피드 설정
    let gameSpeed = 300;

    // 게임 회사 및 승패 정보 저장
    

    // 게임 시작 함수
    function gameStartSelect () {
      // PC 난수 생성 (이전 값과 동일하지 않게 생성)
      while (true) {
        gameStart = getRandom();

        if (gameStart !== lastPcSelect)
      }
    }


    

})

