
import Footer from "@/componants/Footer";
import Header from "@/componants/Header";
import Loader from "@/componants/Loader";
import Script from "next/script";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Existing styles */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/odometer.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/jquery-ui.css" />
        <link rel="stylesheet" href="/css/nice-select.css" />
        <link rel="stylesheet" href="/css/animate-headline.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.css" />
        <link rel="stylesheet" href="/css/slick.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/modal-video@2.4.2/css/modal-video.min.css"
        />
      </head>
      
      <body >
        <Loader />
        <Header />
        {children}

        {/* Scripts */}
        <Footer />
        <script src="/js/jquery.min.js"></script>
        <script src="/js/bootstrap.bundle.min.js"></script>
        <script src="/js/wow.min.js"></script>
        <script src="/js/jquery-ui.js"></script>
        <script src="/js/jquery.appear.min.js"></script>
        <script src="/js/odometer.min.js"></script>
        <script src="/js/imagesloaded.pkgd.min.js"></script>
        <script src="/js/isotope.pkgd.min.js"></script>
        <script src="/js/packery-mode.pkgd.js"></script>
        <script src="/js/jquery.magnific-popup.min.js"></script>
        <script src="/js/jquery.nice-select.min.js"></script>
        <Script src="/js/animate-headline.js" strategy="afterInteractive" />
        <script src="/js/slick.min.js"></script>
        <script src="/js/swiper-bundle.js"></script>
        <script src="/js/ajax_callback.js"></script>
        <script src="/js/simple-pagination.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/modal-video@2.4.2/js/jquery-modal-video.min.js"></script>
        <script src="/js/main.js"></script>
      </body>
    </html>
  );
}


