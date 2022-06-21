'use strict'
const main = document.getElementById("main");

const jobs = async () =>{
  const response = await fetch ('./data.json');
  const data = await response.json();


data.forEach(item=>{
  const sum =  (arr) =>{
    console.table(item)
  //  console.log(arr)
    for(let i = 0; i<arr.length; i++){
      const final = `${arr[i]}`
     return final
   }
  }


    main.innerHTML += `     
    <div id="details">
      

    <div id="imageDiv">
    <img src=${item.logo} alt="">
  </div>

  <div id="info">
    <div class="company">
        <h2>${item.company}</h2>
        <h2 class="new">${item.new ?  "New !" : ""}</h2>
        <h2 class="featured" id="featured" >${item.featured ?  "Featured" : ""}</h2>
    </div>
   <h2>${item.position}</h2>
    <div id="data">
        <p>${item.postedAt}</p>
        <div class="dots" ></div>
        <p>${item.contract}</p>
        <div class="dots" ></div>
        <p>${item.location} </p>
    </div> 
  </div>

  <div id="skills">
  <p id="skill">${item.role}</p> 
  <p id="skill">${item.level}</p> 
    <p id="skill">${sum(item.languages)}</p> 
    <p id="skill">${sum(item.tools)}</p> 
  </div>
  
</div>
`
 })
}

jobs()


