import { BrowserRouter } from 'react-router-dom'

import { QueryClientProvider } from 'react-query'
import queryClient from '../lib/react-query'

const Providers = ({children}) => {
  return (
    <QueryClientProvider client={queryClient} >
      <BrowserRouter>
        {children}
      </BrowserRouter> 
    </QueryClientProvider>
  )
}

export default Providers