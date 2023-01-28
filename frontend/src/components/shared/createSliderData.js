const { persianDate, default: PersianDate } = require("./persianDate")

function createSliderContentData(){
    const finalDate = new PersianDate();
    const month = finalDate.getMonthName;
    const monthIndex = finalDate.getMonth;
    const dayIndex = finalDate.getDay;
    const dayName = finalDate.getDayName;
    const dateNumber = finalDate.getDate;  
    const takenData = [{dateNumber : dateNumber , dayName : dayName}]
    const result = createData(takenData , dayIndex , dateNumber , monthIndex)

    return [result , month]

    

    
}

function createData(data , dayIndex , dateNumber , monthIndex){
    const days = ["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه"]
    let n = dateNumber
    let i = dayIndex
    let m = monthIndex
    while(dayIndex < 7){
        if(m < 7){
            for(let x = 7 ; x<8 ; x++ ){
                while(n < 32){ 
                    data.push({dateNumber : n++ , dayName : days[i++]})  
                }
            }
        }
        else{
            for(let x = 7 ; x<8 ; x++ ){
                while(n < 31){ 
                    data.push({dateNumber : n++ , dayName : days[i++]})  
                }
            }
        }
        
    }
    return(data)
        
}
module.exports = {createSliderContentData,createData} 