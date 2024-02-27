export default {
    dataformat:(date)=>{
        if(date!=null){
            return ""
        }
        return date.substr(0,10)
    }
}