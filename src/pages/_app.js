import App from 'next/app'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ServicesProvider } from '../data/providers/ServicesProvider'
import globalStyles from '../styles/globals.js'

const MyApp = ({ Component, pageProps }) => {

  useEffect(() => {
    console.log('resultado path');
  }, [])
  return (
    <>
      <ServicesProvider>
        {true
          ? (
            <Component {...pageProps} />
          ) : (
            <div className="request-loader-container">
              <Loader
                type="Grid"
                color="#1894E4"
                height={150}
                width={150}
              />
            </div>
          )
        }
      </ServicesProvider>
      <style jsx>
        {`
          :global(body, html) {
            min-height: 100% !important;
            height: 100%;
            margin: 0;
            position: relative;
          }
          :global(html) {
            min-height: 100% !important;
            height: 100%;
            margin: 0;
            position: relative;
          }
          :global(#__next) {
            min-height: 100% !important;
            height: 100%;
            margin: 0;
          }
        `}
      </style>
    </>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx)
  return {
    ...appProps
  }
}

export default MyApp
