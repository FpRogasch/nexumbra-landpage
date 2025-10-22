/**
 * Proveedor de contexto global de la aplicación
 * Envuelve la app con los proveedores necesarios:
 * - SaasProvider: Tema y configuración de Chakra UI
 * - AuthProvider: Gestión de autenticación
 * - LoadingWrapper: Pantalla de carga inicial
 */
'use client'

import { AuthProvider } from '@saas-ui/auth'
import { SaasProvider } from '@saas-ui/react'

import { theme } from '#theme'
import { LoadingWrapper } from '#components/loading'

export function Provider(props: { children: React.ReactNode }) {
  return (
    <SaasProvider theme={theme}>
      <AuthProvider>
        {/* Pantalla de carga con delay reducido para mejor UX */}
        <LoadingWrapper delay={1500}>
          {props.children}
        </LoadingWrapper>
      </AuthProvider>
    </SaasProvider>
  )
}
