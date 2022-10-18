import { GlobalState } from '../interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { SizeType } from 'antd/lib/config-provider/SizeContext'

const globalState: GlobalState = {
	token: '',
	assemblySize: 'middle', // 组件大小
	language: ''
}

const globalSlice = createSlice({
	name: 'global',
	initialState: globalState,
	reducers: {
		setToken(state: GlobalState, { payload }: PayloadAction<string>) {
			state.token = payload
		},
		setAssemblySize(state: GlobalState, { payload }: PayloadAction<SizeType>) {
			state.assemblySize = payload
		},
		setLanguage(state: GlobalState, { payload }: PayloadAction<string>) {
			state.language = payload
		}
	}
})

export const { setToken, setAssemblySize, setLanguage } = globalSlice.actions
export default globalSlice.reducer
