import Head from 'next/head'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import themeConfig from '../components/theme/themeConfig'
import themeOptions from '../components/theme/themeOptions'
import UserLayout from '../components/userLayout'
import ThemeComponent from '../default/themeComponent'
import { SettingsConsumer, SettingsProvider } from '../components/theme/settingsContext.js'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { Analytics } from '@vercel/analytics/react'

if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => NProgress.start())
  Router.events.on('routeChangeError', () => NProgress.done())
  Router.events.on('routeChangeComplete', () => NProgress.done())
}

const App = props => {
  const { Component, pageProps } = props
  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  return (
    <>
      <Head>
        <title>{themeConfig.templateName}</title>
        <meta name='description' content={`${themeConfig.templateName} – Coleta de dados de sites.`} />
        <meta name='keywords' content='Webscraping, Animes, Séries, Mangás, Filmes.' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>

      <SettingsProvider>
        <SettingsConsumer>
          {({ settings, saveSettings }) => {
            const theme = themeOptions(settings)

            return (
              <ThemeComponent settings={settings}>
                {getLayout(
                  <Component
                    theme={theme}
                    settings={settings}
                    saveSettings={saveSettings}
                    themeConfig={themeConfig}
                    {...pageProps}
                  />
                )}
              </ThemeComponent>
            )
          }}
        </SettingsConsumer>
      </SettingsProvider>
      <Analytics />
    </>
  )
}

export default App
