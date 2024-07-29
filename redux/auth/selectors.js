const isLoggedIn = state => state.authReducer.isLoggedIn;
const isLoading = state => state.authReducer.isLoading;
const error = state => state.authReducer.error;

const select = { isLoggedIn, isLoading, error };

export default select;
