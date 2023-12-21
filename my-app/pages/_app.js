// import "../styles/globals.css";

import HydrationZustand from '../components/Hydration/Hydration';

// import '/components/MainPageComponent/MainPage.css';
import "../src/fonts/App.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HydrationZustand>
        <Component {...pageProps} />
      </HydrationZustand>
    </>
  );
}

export default MyApp;
