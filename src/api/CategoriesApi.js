import ApiManager from './ApiManager'

export const CategoriesApi = async data => {
    try {
        const result = await ApiManager("/categories",{
            method:"GET",
            headers:{
                'content-type':"application/json"
            }
        });
        // console.log(`result ${result}`);
        return result;
    } catch (error) {
        console.log(`error ${error}`);
        return error.response
    }
}