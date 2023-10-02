import { useState } from 'react'
import './App.css'
import {Main} from './page/Main'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Layout } from './layout/Layout'


function App() {

const queryClient = new QueryClient()


  return (
   
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
<Route path = "/" element = {<Layout/>}>
<Route index element = {<Main/>}/>


</Route>

      </Routes>
      </BrowserRouter>
    <Main/>
    </QueryClientProvider>

  )
}

export default App
