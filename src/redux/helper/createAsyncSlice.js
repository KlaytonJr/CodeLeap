import { createSlice } from '@reduxjs/toolkit';

const createAsyncSlice = (config) => {
	const slice = createSlice({
		name: config.name,
		initialState: {
      loading: false,
      user: '',
      ...config.initialState,
    },
		reducers: {
      fetchStarted(state) {
        state.loading = true;
      },
      fetchSuccess(state, action) {
        state.loading = false;
        state.user = action.payload;
      },
      fetchError(state, action) {
        state.loading = false;
        state.user = '';
      },
			...config.reducers,
    },
  });

const { fetchStarted, fetchSuccess, fetchError } = slice.actions;
const asyncAction = (payload) => async (dispatch) => {
    try {
      dispatch(fetchStarted());
			const { url, options } = config.fetchConfig(payload);
			const response = await fetch(url, options);
			const data = await response.json();
        return dispatch(fetchSuccess(data));
    } catch (error) {
      return dispatch(fetchError(error.message));
    }
  };

	return { ...slice, asyncAction };
};

export default createAsyncSlice;