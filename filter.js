
let i;
let searchArr = [];
let searchBox = document.getElementById("search-box");

const toggleBox = ()=>{
    if (arr.length==0){
        searchBox.style.display="none";
    }else{
        searchBox.style.display="block";
    }
}

const filterJob = async () =>{
    toggleBox();
    const response = await fetch ('./data.json');
    removeItem();
    const data = await response.json();
    
    const jobContainer =  document.querySelectorAll(".details");
    const toolsDom =  document.querySelectorAll(".tools");
    const levelDom =  document.querySelectorAll(".level");
    const langDom =  document.querySelectorAll(".languages");
    const roleDom=  document.querySelectorAll(".role");
    const searchFlex = document.querySelectorAll(".search-flex")
  
    for(i= 0; i<arr.length; i++){
        if(searchArr.includes(searchFlex[i].innerText)){

        }else{
            searchArr.push(searchFlex[i].innerText);
        }
    }
 

    // Looping Over API data
    data.forEach((item, index)=> {
        
        // console.log(index,"strat");
        // console.log()
        const{languages, tools, role, level}= item
        let array = languages.concat( tools, role, level);
        
        // Extracting Strings from Array of Query
        const toolStr = toolsDom[index].innerText;
        const levelStr = levelDom[index].innerText;
        const langStr = langDom[index].innerText;
        const roleStr = roleDom[index].innerText;
        
        
        // Turning string to array
        const toolArr = toolStr.split("\n")
        const levelArr = levelStr.split("\n")
        const langArr = langStr.split("\n")
        const roleArr = roleStr.split("\n")

        // Getting Final Array
        const itemsArray = roleArr.concat(toolArr, levelArr, langArr);
        
        
        // console.log(toolArr)

        let i =0;
        for(i; i<10; i++){}
        jobContainer[index].style.display="grid";
        searchArr.length = arr.length;
        
        jobContainer[index].style.display="grid";

        if(searchArr.every((element) => itemsArray.includes(element))){
            jobContainer[index].style.display="grid";
            jobContainer[index].style.borderLeft="5px solid hsl(180, 29%, 50%)";
        }
        
        else{
            jobContainer[index].style.display="none";
        }
        // console.log(itemsArray)
        // console.log(searchArr)
        if(searchArr==[]){
            jobContainer[index].style.borderLeft="none";
        }
        
    });
}
// filterJob()
// var mainArray = [1, 30, 39, 29, 10, 13];
// 
// var containedArray = [1, 30, 39, 29]
