import axios from "axios"

const fetchData = async(category) => {
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${category}`)
        //console.log(response)
        return response
    } catch (error) {
        console.log(error)
    }
}

const fetchCategory = async() => {
    try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
        //console.log(res)
        return res
    } catch (error) {
        console.log(error)
    }
}

const fetchCuisine = async() => {
    try {
        const resp = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        //console.log(resp)
        return resp
    } catch (error) {
        console.log(error)
    }
}

export {
    fetchData,
    fetchCategory,
    fetchCuisine
}