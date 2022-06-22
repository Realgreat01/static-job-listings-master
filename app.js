
const main = document.getElementById("main");

const jobs = async () =>{
  const response = await fetch ('./data.json');
  const data = await response.json();


data.forEach(item=>{
  const sum =  (arr) =>{
    const p = document.createElement("p");

    if(arr.length>0){
      for(let i = arr.length; i > 0 ; i--){
        arr.forEach(element => {
                  p.textContent += `<span style="margin: 5px; padding:10px" class="job-skill" id="skill">${element}</span>`
                });

        const final = `<span  id="skilled" >${p.textContent} </span>`
        return final
    }
  }else{
    return `
    <p style="display:none ">None skill</p>`
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
  <p id="skill" style= "padding: 10px">${item.role}</p> 
  <p id="skill" style= "padding: 10px">${item.level}</p> 
  <p>${sum(item.tools)}</> 
  <p>${sum(item.languages)}</p> 
  </div>
  
</div>
`
 })
}

jobs()



