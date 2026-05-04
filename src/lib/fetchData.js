export const getAnimalsData =async()=>{
    const res = await fetch("https://qurbanir-hat-five.vercel.app/data.json");
    const animals = await res.json();
    return animals;
 }