import '../styles/globals.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function MyApp({ Component, pageProps }) {
  return (
    <HelmetProvider>
      <Component {...pageProps} />
      <Helmet>
        <script>
          {
            `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
              n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1950676088450296');
            fbq('track', 'PageView');
            `
          }
        </script>
        <noscript><img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=1950676088450296&ev=PageView&noscript=1"
        /></noscript>
      </Helmet>
    </HelmetProvider>
  )
}

export default MyApp
