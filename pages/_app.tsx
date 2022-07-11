import "../styles/globals.css"
import type { AppProps } from "next/app"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "components/layout/Layout"
import { Provider } from "react-redux"
import store from "store/main-store";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default MyApp
