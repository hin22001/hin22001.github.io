import '../styles/globals.css'
import { Provider } from "react-redux"
import { connect } from "react-redux"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/lib/integration/react"
import { useStore } from "../util/store"
import Page from "./_page"

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  const persistor = persistStore(store, {}, function () {
    persistor.persist()
  })

  return (
    <Provider store={store}>
      <PersistGate loading={<div>loading</div>} persistor={persistor}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
