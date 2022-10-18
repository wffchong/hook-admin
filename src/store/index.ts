import { configureStore, combineReducers } from '@reduxjs/toolkit'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
// 使用 TypedUseSelectorHook 重写 useSelector
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux'
//配置数据的持久化效果
import { persistStore, persistReducer } from 'redux-persist'
//导入需要配置的数据源，可以选择，storage，cookie,session等
import storage from 'redux-persist/lib/storage'
import global from './modules/global'

//定义配置的信息
const persistConfig = {
	key: 'root',
	storage: storage,
	// 如果不想将部分state持久化，可以将其放入黑名单(blacklist)中.黑名单是设置
	// blacklist: ['']
	// 白名单 --> 和黑名单只需要使用一个就行
	whitelist: ['user']
}

const reducer = combineReducers({ global })

//创建持久化的配置persist的信息
const persistReducerConfig = persistReducer(persistConfig, reducer) as typeof reducer

// redux middleWares
const middleWares = [reduxThunk, reduxPromise]

export const store = configureStore({
	reducer: persistReducerConfig,
	// 解决控制台报错无法序列号
	middleware: middleWares,
	devTools: true
})

//使用persistStore包裹一下
export const persistor = persistStore(store)

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useSelector: TypedUseSelectorHook<RootStateType> = useReduxSelector
export const useDispatch = () => useReduxDispatch<AppDispatch>()
