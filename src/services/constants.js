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

// const fetchFood = async() => {
//     try {
//         const res = await axios.get(``)
//     } catch (error) {
//         console.log(error)
//     }
// }

export default fetchData