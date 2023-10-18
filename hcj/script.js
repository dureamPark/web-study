// 게임 상태를 저장하는 객체
const game = {
    score: 0,
};

// 클릭 버튼 요소 가져오기
const clickButton = document.getElementById('clickButton');

// 점수를 업데이트하고 화면에 표시하는 함수
function updateScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = game.score;
}

// 클릭 이벤트 리스너 등록
clickButton.addEventListener('click', function() {
    // 클릭할 때마다 점수를 1씩 증가
    game.score += 1;
    if(game.score>=10){
        alert("Easter Egg");
    }
    // 화면에 새로운 점수 표시
    updateScore();
});

// 초기 점수 표시
updateScore();
