import axios from 'Axios'
export default () => {
    return axios.create({
        baseURL: `http://localhost:8081`
    }) 
    
}