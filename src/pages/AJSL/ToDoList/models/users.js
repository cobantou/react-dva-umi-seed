import * as usersService from '../services/users';

//antd将数据等在这里处理
export default {
  namespace: 'users',
  state: {
    list: [],
    total: null,
    page: null,
  },
  //主要是一些同步reducer
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  //副作用，主要是一些异步
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data, headers } = yield call(usersService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10),
          page: parseInt(page, 10),
        },
      });
    },
    *remove({ payload: id }, { call, put, select }) {
      yield call(usersService.remove, id);
      const page = yield select(state => state.users.page);
      yield put({ type: 'fetch', payload: { page } });
    },
    *patch({ payload: { id, values } }, { call, put, select }) {
      yield call(usersService.patch, id, values);
      const page = yield select(state => state.users.page);
      yield put({ type: 'fetch', payload: { page } });
    },
    *create({ payload: values }, { call, put, select }) {
      yield call(usersService.create, values);
      const page = yield select(state => state.users.page);
      yield put({ type: 'fetch', payload: { page } });
    },
  },
  //订阅（https://github.com/dvajs/dva/blob/master/docs/API_zh-CN.md#subscriptions）
  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({ type: 'fetch' ,payload:{}});

      // return history.listen(({ pathname, query }) => {
      //   if (pathname === '/users') {
      //     dispatch({ type: 'fetch', payload: query });
      //   }
      // });
    },
  },
};
