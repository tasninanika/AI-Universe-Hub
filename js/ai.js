// fetch data
const loadAiUniverse = async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();
    const ai = data.data;
    console.log(data);
    console.log(ai);
    displayAi(ai);
}
loadAiUniverse();

// single card
const displayAi = (ai) =>{
    console.log(ai);

    // card
    const aiContainer = document.getElementById('ai-container');
    console.log(aiContainer);
    
}