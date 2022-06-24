
const main = document.getElementById("main");

const jobs = async () =>{
  const response = await fetch ('./data.json');
  const data = await response.json();


data.forEach(item=>{
  const tools =  (arr) =>{
    const p = document.createElement("p");
    if(arr.length>0){
        for(let i = arr.length; i > 0 ; i--){
            arr.forEach(element => { p.textContent += `<span style="margin: 5px; padding:10px" class="job-skill" id="skill" onclick="filter(this)">${element}</span>` });
            const final = `<span  id="skilled" class="tools">${p.textContent} </span>`
        return final
    }
  }else{
    return `
    <p style="display:none" class="tools">No tools</p>`
  }
}
  const languages =  (arr) =>{
    const p = document.createElement("p");
    if(arr.length>0){
        for(let i = arr.length; i > 0 ; i--){
            arr.forEach(element => { p.textContent += `<span style="margin: 5px; padding:10px" class="job-skill" id="skill" onclick="filter(this)">${element}</span>` });
            const final = `<span  id="skilled" class="languages">${p.textContent} </span>`
        return final
    }
  }else{
    return `
    <p style="display:none" class="languages">No Lang</p>`
  }
}

    main.innerHTML += `     
    <div class="details">
      

    <div id="imageDiv">
    <img src=${item.logo} alt="">
  </div>

  <div id="info">
    <div class="company">
        <h2>${item.company}</h2>
        <h2>${item.new ?  `<span class="new" >New!</span>` : `<span style="display:none;"></span>`}</h2>
        <h2>${item.featured ?  `<span class="featured" " >Featured</span>` : `<span style="visibility:hidden">Featured</span>`}</h2>
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
  <p id="skill" class="role"style= "padding: 10px" onclick="filter(this)">${item.role}</p> 
  <p id="skill" class="level"style= "padding: 10px" onclick="filter(this)">${item.level}</p> 
  <p>${tools(item.tools)}</> 
  <p>${languages(item.languages)}</p> 
  </div>
  
</div>
`

 })
 const details = document.querySelectorAll(".details");
    details[0].style.borderLeft="5px solid hsl(180, 29%, 50%)";
    details[1].style.borderLeft="5px solid hsl(180, 29%, 50%)";


}

jobs()



