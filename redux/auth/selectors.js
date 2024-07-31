const isLoggedIn = state => state.authReducer.isLoggedIn;
const isLoading = state => state.authReducer.isLoading;
const error = state => state.authReducer.error;
const token = state => state.authReducer.token;

const select = { isLoggedIn, isLoading, error, token };

export default select;
