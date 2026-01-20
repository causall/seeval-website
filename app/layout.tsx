import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { ReactNode } from 'react'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'Seeval',
    template: '%s – Seeval'
  },
  description: 'Seeval Documentation'
}

const navbar = (
  <Navbar
    logo={<span style={{ fontWeight: 700 }}>Seeval</span>}
    projectLink="https://github.com/your-org/seeval"
  />
)

const footer = <Footer>MIT {new Date().getFullYear()} © Seeval</Footer>

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/your-org/seeval/tree/main"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
