export default (state = {} , action) => {

    switch (action.type) {
        case 'AUTH_LOGIN':
			localStorage.setItem('access_token' , action.payload.token);
        	return {...state , user:action.payload , isAuthenticated: true};

        case 'AUTH_LOGOUT':
			localStorage.removeItem('access_token')
			return {...state, user:{} ,isAuthenticated: false}

		case 'AUTH_CHECK':
			return {...state , user:action.payload , isAuthenticated: !!localStorage.getItem('access_token')};

		case 'AUTH_FAILED':
			state = Object.assign({}, state,{
				 errMsg: action.data.errorMsg
			})
			return state;

        default:
            return state
    }
}