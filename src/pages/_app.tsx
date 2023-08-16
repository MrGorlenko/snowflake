import "../globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import type { AppProps } from "next/app";
import { store, persistor } from "../store";
import I18nProvider from "next-translate/I18nProvider";
import useTranslation from "next-translate/useTranslation";

function MyApp({ Component, pageProps }: AppProps) {
	const { lang } = useTranslation();

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<I18nProvider lang={lang}>
					<Component {...pageProps} />
				</I18nProvider>
			</PersistGate>
		</Provider>
	);
}

export default MyApp;
