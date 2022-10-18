import { GlobalState } from '../interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const globalState: GlobalState = {
	token: '123'
}

const globalSlice = createSlice({
	name: 'global',
	initialState: globalState,
	reducers: {
		setToken(state: GlobalState, { payload }: PayloadAction<string>) {
			console.log(payload)
			state.token = payload
		}
	}
})

export const { setToken } = globalSlice.actions
export default globalSlice.reducer
