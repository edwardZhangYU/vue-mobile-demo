import axios from 'axios'
export default {
    setHotTags ({commit}){
        axios.get('http://localhost:8080/static/data/hottags.json').then((res)=>{
            commit('setHotTags',res.data.tags)
        },(err)=>{
            console.log(err)
        })
        
    } 
}