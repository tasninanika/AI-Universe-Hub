// fetch data
const loadAiUniverse = async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();
    const ai = data.data.tools;
    console.log(data);
    console.log(ai);
    displayAi(ai);
}


// single card
const displayAi = (ai) =>{
    console.log(ai);

    // get the container
    const aiContainer = document.getElementById('ai-container');
    console.log(aiContainer);

    // for each card
    ai.forEach(singleAi => {
        console.log(singleAi);

         // create div
    const div = document.createElement('div');

    // set inner html in div
    div.innerHTML = `

    `;
    });

   

}

loadAiUniverse();