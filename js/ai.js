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

        // added classes on div
        div.className = `card border-2 w-80`;

        // set inner html in div
        div.innerHTML = `
            <div class="p-5">
            <figure class="p-10 rounded-xl bg-[#0D6EFD0D]">
              <img src="${singleAi.image}" alt="phone" class="rounded-xl" />
            </figure>
        </div>
        <div class="card-body items-center text-center">
              <h2 class="card-title text-2xl font-semibold mb-3">Features</h2>
              <ol class="text-sm text-[#706F6F]">
              <li>${singleAi?.features[0]}</li>
              <li>${singleAi?.features[1]}</li>
              <li>${singleAi?.features[2]}</li>
              </ol>
              <h3 class="text-2xl font-bold pb-2">$999</h3>
              <div class="card-actions">
                <button onclick="showDetails('')" class="btn bg-[#74700e] text-white">Show Details</button>
              </div>
        </div>
        `;

        // append div on container
        aiContainer.appendChild(div);
        console.log(div);
    });

   

}

loadAiUniverse();