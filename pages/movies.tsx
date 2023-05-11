import React, { useState, useEffect } from 'react';
import Item from '@/component/FilmItem';
import style from '/styles/movies.module.css';
import Navbar from '@/component/navbar/Navbar';
import Header from '@/component/header';
import SimpleImageSlider from 'react-simple-image-slider';
import axios from 'axios';

interface ItemData {
  image: string;
  name: string;
}

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
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<ItemData[]>([]);
  const [movie,setMovie]=useState([])
  const[next,setNext]=useState('')

  useEffect(() => {
    fetchItems();
  }, [currentPage]);

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
