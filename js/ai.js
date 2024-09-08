const aiUniverse = async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();
    const ai = data.data;
    console.log(data);
    console.log(ai);
}
aiUniverse();