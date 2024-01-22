'use client'
import Image from 'next/image'
import { Carousel,Card  } from 'flowbite-react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {db} from "../firebase/firebase.js"
import { useState,useEffect  } from 'react';
import { collection, getDocs } from "firebase/firestore";

async function fetchDatabase() {
  const films = await getDocs(collection(db,"film"))
  const data=[];
  films.forEach((doc) => (
    data.push({...doc.data(), id: doc.id})
  ))
  console.log(data);
  return data
}


export default function Home() {

  const [films, setFilms] = useState([])
  useEffect(()=>{
    async function fetchData(){
      const data = await fetchDatabase();
      setFilms(data)
    } 
    fetchData()
    console.log(films);
  },[])






  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     
      <Navbar />
      <div className='w-full h-[550px]'>
        <div className='h-full bg-gray-800'>   
            <div className="h-full">
              <Carousel className='' leftControl=" " rightControl=" ">
                <img src="/images/Kraven2023.jpeg" className='h-full md:w-[500px] w-[400px]' alt="..." />
                <img src="/images/Babilon23.webp" className='h-full md:w-[500px] w-[400px]' alt="..." />
                <img src="/images/blackAdam.jpg" className='h-full md:w-[500px] w-[400px]' alt="..." />
                <img src="images/bloodshot.jpeg" className='h-full md:w-[500px] w-[400px]' alt="..." />
                <img src="/images/Fast2011.jpg" className='h-full md:w-[500px] w-[400px]'  alt="..." />
              </Carousel>
            </div>
        </div>
      </div>
      <div className='mt-5'>
        <div className='flex flex-col items-center'>
          <h1 className='text-[#F99A3A] text-4xl'>Films</h1>
          <div className='w-20 bg-[#F99A3A] h-[2px] rounded-full'></div>
        </div>
        <div className='mt-4'>
          {/* <Card
              className="max-w-sm m-2"
              renderImage={() => <Image width={500} height={500} src="/images/Fast2011.jpg" alt="image 1" />}
            >
              <div className='flex items-center justify-between'>
                  <p className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Fast and Furious 9
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Film
                  </p>
              </div>
          </Card> */}
          <div>
            {films.map((film)=>(
              <div key={film.id}>
                <h2>{film.nom}</h2>
                <p>{film.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* comment */}
      {/* comment */}
      {/* comment */}
      {/* comment */}
      {/* <Footer /> */}
    </main>
  )
}
