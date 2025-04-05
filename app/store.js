const { configureStore } = require("@reduxjs/toolkit");
const cakeSlice = require("../features/cake/cakeSlice");
const iceCreamSlice = require("../features/iceCream/iceCreamSlice");
const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();
const userReducer = require("../features/user/userSlice").userReducer;

const store = configureStore({
  reducer: {
    cake: cakeSlice.reducer,
    iceCream: iceCreamSlice.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
