import React, { useState, useEffect } from 'react';
import Item from '@/component/FilmItem';
import style from '/styles/movies.module.css';
import Navbar from '@/component/navbar/Navbar';
import Header from '@/component/header';
import SimpleImageSlider from 'react-simple-image-slider';
import axios, { all } from 'axios';
import CustomSelect from '@/component/OptionType';
import Select from 'react-select';

interface ItemData {
  image: string;
  name: string;
}

const options=[
  {id:1,value:'جدید ترین',label:'جدید ترین'},
  {id:2,value:'قدیمی ترین',label:'قدیمی ترین'},
  {id:3,value:'پرامتیازترین',label:'پرامتیازترین'},
  {id:4,value:'کمترین امتیاز',label:'کمترین امتیاز'}
]

const images = [
  { url: '/slider-image/gotham.jpg' },
  { url: '/slider-image/aquman.jpg' },
  { url: '/slider-image/shadow&bone.jpg' },
  { url: '/slider-image/good-doctor.jpg' },
  { url: '/slider-image/chuky.jpg' },
  { url: '/slider-image/lucky-hank.jpg' },
  { url: '/slider-image/black-list.jpg' }
];

const itemsPerPage = 5;

export default function Explore(): JSX.Element {
  // const [sort,SetSort] = useState(['جدید ترین','قدیمی ترین','پرامتیازترین','کمترین امتیاز'])
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<ItemData[]>([]);
  const [movie,setMovie]=useState([])
  const [gen,setGen] = useState<string | null>(null);
  const [sort,setSort] = useState<string | null>(null);
  const [act,setAct] = useState<string | null>(null);
  const [allGenre,setAllgenre] = useState([])
  const [actors,setActors]=useState([])
  const [sortiption,setsortoption]=useState([])
  const[next,setNext]=useState('')
  console.log('allGenre',allGenre);
  
  useEffect(() => {
    fetchItems();
    getAllGanre()
    fetchActor()
  }, [currentPage]);

  const fetchActor =async () => {
    await axios.get('https://nitroback.pythonanywhere.com/movies/actors')
    .then((res)=>{
      console.log('actor',res.data)
      setActors(res.data.results.map((item:any)=>({value:item.name,label:item.name})))
    })
    .catch((err)=>{
      console.log('err',err);
  }
  )
    
  }
 const getAllGanre = async() =>{
    await axios.get('https://nitroback.pythonanywhere.com/movies/categories/')
    .then((res)=>{
        console.log('res',res.data.results);
        // set value and label for react-select inside title
        setAllgenre(res.data.results.map((item:any)=>({value:item.title,label:item.title})))
    }
    )
    .catch((err)=>{
        console.log('err',err);
    }
    )
}


  const fetchItems = async () => {
    try {
      const response = axios.get(`https://nitroback.pythonanywhere.com/movies/movies/?page=${currentPage}&limit=${itemsPerPage}`).then((res)=>{
        setNext(res.data.next)
      setMovie(res.data.results)
        console.log('res',res.data.results);
      });
    //   const data = await response.json();
    //   setItems(data);
    } catch (error) {
      console.log('Error fetching items:', error);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const handleGenreChange = (e) => {
    setGen(e);
  };
  const handleActorChange = (e) => {
    setAct(e);
  };
  const handlesort = (e) => {
    setSort(e);
  };
 

  const renderItems = (): JSX.Element[] => {
    return movie.map((item, index) => (
      <Item key={index} image={item.thumbnail} name={item.title} description={item.description} />
    ));
  };

  return (
    <div className={style.mainSection}>
      <Header />
      <div>
        <SimpleImageSlider
          style={{ marginTop: '75px' }}
          width={'100%'}
          height={678}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
      <div className={style.ganreItem}>
        <h2 className={style.title}>فیلم</h2>
        <div className={style.filter}>
       <Select 

          className={style.select}
          placeholder="ژانر"
          value={gen}
          onChange={(e) => handleGenreChange(e)}
          options={allGenre}
       />
       <Select 

          className={style.select2}
          placeholder="بازیگر"
          value={act}
          onChange={(e) => handleActorChange(e)}
          options={actors}
       />
       <Select 

          className={style.select2}
          placeholder="مرتب سازی براساس"
          value={sort}
          onChange={(e) => handlesort(e)}
          options={options}
       /></div>
        <div className={style.container}>{renderItems()}</div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className={style.preview} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            قبلی
          </button>
          <button className={style.next} onClick={() => handlePageChange(currentPage + 1)} disabled={next==null}>
            بعدی
          </button>
        </div>
      </div>
    </div>
  );
}
