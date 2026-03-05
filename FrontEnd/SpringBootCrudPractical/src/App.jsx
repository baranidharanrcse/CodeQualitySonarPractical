import './App.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Login } from './Components/Login'
import { KycHandler } from './Components/KycHandler'
import { ViewKyc } from './Components/ViewKyc'
import { SumbitKyc } from './Components/SumbitKyc'
import { EditKyc } from './Components/EditKyc'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' ele/>
          <Route path='/Kyc/Login' element={<Login />} />
          <Route path='/Kyc/KycHandler' element={<KycHandler />} />
          <Route path='/Kyc/SubmitKyc' element={<SumbitKyc />} />
          <Route path='/Kyc/ViewKyc' element={<ViewKyc/>} />
           <Route path='/Kyc/EditKyc/:id' element={<EditKyc/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
