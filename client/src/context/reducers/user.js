const userReducer = (state = null, action) => {
    switch(action.type){
        case 'SET_USER':
            localStorage.setItem('user', JSON.stringify(action.payload));
            return action.payload;

        case 'GET_USER':
            return state;

        case 'SET_USER_NULL':
            return action.payload;

        default:
            return state;
    }
}

export default userReducer