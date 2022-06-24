arr = [];
const search = document.getElementById("search-field");
const clear = document.getElementById("clear");

const p = document.createElement("p");

function filter(job){
    const html= `<p class="search-flex"><span class="search-item" >${job.textContent}</span><img src="./images/icon-remove.svg" class="search-images" onclick="removeItem()"></p>`
    if(arr.includes(html)){
    }else{
      arr.push(html)
    }

    if(arr.length>0){
      search.innerHTML = ""
        for(item of arr){
          search.innerHTML += item;
        }
      }
  };

const removeItem=()=>{
  const remove = document.querySelectorAll(".search-flex");
  remove.forEach( (job, index)=> {
    job.addEventListener("click", ()=> {
      arr.splice(index,1);
      if(arr.length>=0){
        search.innerHTML = ""
          for(item of arr){
            search.innerHTML += item;
          }
        }
        filterJob()
    });
    })}


  clear.addEventListener("click", ()=> {
        search.innerHTML ="";
        arr.length=0;
})