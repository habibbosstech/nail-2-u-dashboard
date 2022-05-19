import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store, persistor} from "./redux/store";
import App from "./App";
import {PersistGate} from "redux-persist/integration/react";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.css';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <React.StrictMode>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <App/>
            </React.StrictMode>
        </PersistGate>
    </Provider>,

    document.getElementById("root")
);