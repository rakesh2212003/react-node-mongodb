export const setUser = (data) => {
    return{
        type: 'SET_USER',
        payload: data
    }
}

export const getUser = () => {
    return {
        type: 'GET_USER',
    }
}

export const setUserNull = () => {
    return {
        type: 'SET_USER_NULL',
        payload: null
    }
}