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
        div.className = `card border-2 w-96`;

        // set inner html in div
        div.innerHTML = `
            <div class="pt-5 pl-5 pr-5">
            <figure class=" rounded-xl bg-[#0D6EFD0D]">
              <img src="${singleAi.image}" alt="image not found" class="rounded-xl" />
            </figure>
        </div>
        <div class="card-body pb-5">
              <h2 class="card-title text-2xl font-semibold mb-2">Features</h2>
              <ol class="text-sm text-[#706F6F] border-b pb-4">
              <li>1. ${singleAi?.features[0]}</li>
              <li>2. ${singleAi?.features[1]}</li>
              <li>3. ${singleAi?.features[2]}</li>
              </ol>
              
              <div class="flex">
                <div class="">
                  <h3 class="text-2xl font-bold pb-4">${singleAi?.name}</h3>
              <p class="flex gap-1 text-sm text-[#706F6F]"><img src="images/Frame.png" alt="" class="h-[20px] w-[20px] mb-1">${singleAi?.published_in}</p>
              </div>
              <div class="card-actions justify-end flex-1 mt-5">
                <button onclick="showDetails('')" class="btn bg-[#FEF7F7] text-white rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#EB5757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></button>
              </div>
              </div>
        </div>
        `;

        // append div on container
        aiContainer.appendChild(div);
        console.log(div);
    });

   

}

loadAiUniverse();