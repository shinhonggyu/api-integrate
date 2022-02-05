function createAsyncDispatcher(type, promiseFn) {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  async function actionHandler(dispatch, ...rest) {
    dispatch({ type });
    try {
      const data = await promiseFn(...rest);
      dispatch({ type: SUCCESS, data });
    } catch (error) {
      dispatch({ type: ERROR, error });
    }
  }

  return actionHandler;
}

export default createAsyncDispatcher;
