'use client'

import Header from './components/Header'
import Cards from './components/Cards'
import { useState } from "react";
import Preloader from "./components/Preloader";


 
const page = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      {!loading && (
        <div>
          <div><Header /></div>
          <div><Cards /></div>
        </div>
      )}
    </>
  )
}

export default page



