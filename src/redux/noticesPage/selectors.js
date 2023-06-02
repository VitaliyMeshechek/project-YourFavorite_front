export const selectNotices = state => state.noticesPage.items;
export const selectIsLoading = state => state.noticesPage.isLoading;
export const selectError = state => state.noticesPage.error;
export const selectQuery = state => state.query;
export const selectFavorite = state => state.noticesPage.favorite;
export const selectOwn = state => state.noticesPage.own;
export const selectUserById = state => state.noticesPage.user;
