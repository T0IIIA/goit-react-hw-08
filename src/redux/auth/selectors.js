export const selectLoggedIn = state => state.auth.isLoggedIn
export const selectIsRefreshing = state => state.auth.isRefreshing

export const selectToken = state => state.auth.token
export const selectName = state => state.auth.name