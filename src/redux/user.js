import createAsyncSlice from './helper/createAsyncSlice'

export function USER_GET() {
  return {
    url: "http://dev.codeleap.co.uk" + '/carrers/',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ',
      },
    },
  };
}

const slice = createAsyncSlice({
  name: 'user',
  fetchConfig: (user) => USER_GET(user)
})

export const fetchUser = slice.asyncAction;

export const userLogin = (user) => async (dispatch) => {
  await dispatch(fetchUser())
}

export default slice.reducer;