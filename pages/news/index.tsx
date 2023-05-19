import NewsCard from "@/component/news/Card";
import styles from '../../styles/news.module.css';
import style from '/styles/news.module.css';
import Link from "next/link";
import Select from 'react-select';
import { NewsApi } from "@/API/news";
import Header from "@/component/header";
import Footer from "@/component/Footer";
import {useEffect,useState} from 'react';
import Item from '@/component/FilmItem';
import axios, { all } from 'axios';

const itemsPerPage = 8;

export default function News(){
    const [currentPage, setCurrentPage] = useState(1);
    const [gen,setGen] = useState<string | null>(null);
    const[next,setNext]=useState('');
    const [act,setAct] = useState<string | null>(null);
    const [sort,setSort] = useState<string | null>(null);
    const[news,setnews]=useState<any[]>([])
    const api=async()=>{
      let res=await NewsApi.getList()
      console.log(res)
      if(res?.status=='success'){
        setnews(res?.content.results)
      }
    }
    useEffect(() => {
      fetchItems();
    }, [currentPage]);
    
  const fetchItems = async () => {
    try {
      const response = axios.get(`https://nitroback.pythonanywhere.com/movies/news/?page=${currentPage}&limit=${itemsPerPage}`).then((res)=>{
        setNext(res.data.next)
      setnews(res.data.results)

        console.log('res',res.data.results);
        // res.data.results.map((item) => {
        //   imgs.push(item.thumbnail)
        // })
        // setImage2(imgs)
        // console.log('img',image2);
      });
    //   const data = await response.json();
    //   setItems(data);
    } catch (error) {
      console.log('Error fetching items:', error);
    }
  };








    useEffect(()=>{
        console.log("Called useEffect");
      api()
    },[ ])

    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
   
  
    const renderItems = (): JSX.Element[] => {
      return news.map((item, index) => (
        <Item key={index} image={item.thumbnail} name={item.title} description={item.description} />
      ));
    };



    return(
        <>
        <Header/>
        <h1 style={{direction:'rtl',color:'white',marginTop:80,marginRight:670}}>اخبار سینمای جهان</h1>
        <div className={styles.container}>
        {
          news.map((e:any)=>{
            return(
              <NewsCard key={e?.id} id={e?.id}  title={e.title} description={e.description} image={e.photo}/>
            )
          })
        }

        
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className={style.preview} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            قبلی
          </button>
          <button className={style.next} onClick={() => handlePageChange(currentPage + 1)} disabled={next==null}>
            بعدی
          </button>
        </div>
        </>
    )
}