'use client'

import { AuthProvider } from '@saas-ui/auth'
import { SaasProvider } from '@saas-ui/react'

import { theme } from '#theme'
import { LoadingWrapper } from '#components/loading'

export function Provider(props: { children: React.ReactNode }) {
  return (
    <SaasProvider theme={theme}>
      <AuthProvider>
        <LoadingWrapper delay={2500}>
          {props.children}
        </LoadingWrapper>
      </AuthProvider>
    </SaasProvider>
  )
}
