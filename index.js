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
      };
      filterJob()
  };

const removeItem=()=>{
  filterJob();
  const remove = document.querySelectorAll(".search-flex");
  remove.forEach( (job, index)=> {
    job.addEventListener("click", ()=> {
      arr.splice(index,1);
      searchArr.splice(index,1);
      if(arr.length>=0){
        search.innerHTML = ""
          for(item of arr){
            search.innerHTML += item;
          }
          console.log(searchArr)
        }
      });
    })
  }


  clear.addEventListener("click", ()=> {
    search.innerHTML = "";
    main.innerHTML = " "
    searchArr = [];
    jobs();
    arr.length=0;
})
