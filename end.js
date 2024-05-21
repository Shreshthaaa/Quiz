const finalScore = localStorage.getItem('finalScore');

if (finalScore !== null) {
    
    const finalScoreElement = document.getElementById('finalScore');
 
    finalScoreElement.innerText = `${finalScore}`;
} else {
    console.error('No final score found in localStorage');
}
