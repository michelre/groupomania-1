export const handleApiResponse = (response) => {
    return new Promise((resolve, reject) => {
        if(!response.ok){
            reject(response.json())
            return
        }
        resolve(response.json())
    })
}
