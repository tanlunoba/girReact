
export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message);
    },
    initialState: {
      products: [
        { name: 'dva', id: 1 },
        { name: 'antd', id: 2 },
      ],
    }
  },
};

