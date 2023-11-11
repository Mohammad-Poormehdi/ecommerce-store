"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import ModalProvider from "./modal-provider"
import Toaster from "./toaster-provider"

interface ProvidersProps {
  children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ModalProvider />
        <Toaster />
        {children}
      </QueryClientProvider>
    </>
  )
}

export default Providers
