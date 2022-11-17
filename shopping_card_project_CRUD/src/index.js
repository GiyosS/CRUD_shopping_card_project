import React from 'react'
import {createRoot} from 'react-dom/client';
import './index.css'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'

import {Provider} from "react-redux"
import {store} from "./store";


const container =  document.getElementById('root');
const root = createRoot(container)

// dev-4895dd7e.us.auth0.com
// uUBm9iNVuCYZNag9GUS0L9rD8MEhBAng

root.render(
    <Auth0Provider
        domain={'dev-4895dd7e.us.auth0.com'}
        clientId={'uUBm9iNVuCYZNag9GUS0L9rD8MEhBAng'}
        redirectUri={window.location.origin}
        cacheLocation='localstorage'
    >
    <Provider store={store}>
        <App />
    </Provider>
    </Auth0Provider>,
)
