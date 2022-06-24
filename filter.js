

const filterJob = async () =>{
    const response = await fetch ('./data.json');

    const data = await response.json();

    const jobContainer =  document.querySelectorAll(".details");
    const toolsDom =  document.querySelectorAll(".tools");
    const levelDom =  document.querySelectorAll(".level");
    const langDom =  document.querySelectorAll(".languages");
    const roleDom=  document.querySelectorAll(".role");
    
    
    data.forEach((item, index)=> {
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
        const ItemsArray = roleArr.concat(toolArr, levelArr, langArr);
        


        // if(arr.some(element => array.includes(element))){
        //     jobContainer[index].style.display="none";
        //     // console.log(true)
        // }else{
        //     jobContainer[index].style.display="grid"
        //     // console.log(false)
        // };
    });
}
filterJob()
// var mainArray = [1, 30, 39, 29, 10, 13];
// 
// var containedArray = [1, 30, 39, 29]
