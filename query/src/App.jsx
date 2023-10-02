import './App.css'
import {Main} from './page/Main'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Layout } from './layout/Layout'
// import { Person } from './page/Person'
// import { Character } from "./page/Character";
import { CharacterDetails } from "./page/Character";



function App() {

const queryClient = new QueryClient()


  return (
   
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
         <Route path = "/" element = {<Layout/>}>
          <Route index element = {<Main/>}/>
           {/* <Route path = "/person/:id" element={ <Person/>}/> */}
           {/* <Route path="/character/:id" element={<Character />} /> */}
           <Route path="/character/:id" element={<CharacterDetails />} />

           </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>

  )
}

export default App
