import ModalProvider from "./modal-provider"
import Toaster from "./toaster-provider"

interface ProvidersProps {}

const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    <>
      <ModalProvider />
      <Toaster />
    </>
  )
}

export default Providers
