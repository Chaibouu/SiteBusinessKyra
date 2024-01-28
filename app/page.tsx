'use client'
import Image from 'next/image'
import { Carousel,Card  } from 'flowbite-react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {db} from "../firebase/firebase.js"
import { useState,useEffect  } from 'react';
// import { collection, getDocs } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";


const q = query(collection(db, "film"));

const  getFilms  = async () =>{

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
  
}

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

  useEffect(() => {
    getFilms()
    
  }, [])
  
  useEffect(()=>{
    async function fetchData(){
      const data = await fetchDatabase();
      console.log(data);
      
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
          
          <div>
            {films.map((film)=>(
              <Card
                  className="max-w-sm m-2"
                  key={film.id}
                  renderImage={() => <Image width={500} height={500} src={film.imageUrl} alt="image 1" />}
                >
                  <div className='flex items-center justify-between'>
                      <p className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {film.nom}
                      </p>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        {film.type}
                      </p>
                  </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
       {/* <div key={film.id}>
                <h2>{film.nom}</h2>
                <p>{film.type}</p>
              </div> */}
      {/* <Footer /> */}
    </main>
  )
}
