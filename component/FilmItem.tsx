import React, { useState } from 'react';
import CustomImage from '@/ui/CustomImage';
import styles from '../styles/explore.module.css';
import { FaPen } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import Link from 'next/link';

interface ItemProps {
  image?: string;
  name?: string;
  number?: number;
  description?: string;
  edit?: boolean;
  id:number
}

const Item: React.FC<ItemProps> = ({
  image = '/image/test.jpeg',
  name = 'terminator',
  number = 12346788,
  description = 'این متن تست است برای توضیحات',
  edit = false,
  id
}) => {
    const truncatedDescription = description.length > 100 ? description.slice(0, 100) + '...' : description;
  return (
    <Link className={styles.item} href={`/movie/${id}`} style={{textDecoration:'none'}}>
      <div style={{ width: '100%', height: 227, overflow: 'hidden', position: 'relative' }}>
        <CustomImage src={image?image:''} style={{ width: '100%', height: 227, overflow: 'hidden', borderRadius: '10px' }} />
        <div className={styles.effect}>
          <h5>{truncatedDescription}</h5>
        </div>
      </div>
      <h4 style={{ marginLeft: 10, padding: 0, color: 'aliceblue' ,textDecoration:'none'}}>{name}</h4>
      {edit && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '40px' }}>
          <FaPen size={16} color="orange" title="ویرایش" />
          <IoCloseSharp size={22} color="red" title="حذف" />
        </div>
      )}
    </Link>
  );
};

// interface ExploreProps {
//   items: ItemProps[];
//   itemsPerPage: number;
// }

// const Explore: React.FC<ExploreProps> = ({ items, itemsPerPage }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentItems = items.slice(startIndex, endIndex);

//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       {/* Render pagination controls */}
//       <div>
//         <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
//           Previous
//         </button>
//         <button
//           disabled={endIndex >= items.length}
//           onClick={() => handlePageChange(currentPage + 1)}
//         >
//           Next
//         </button>
//       </div>

//       {/* Render items */}
//       {currentItems.map((item, index) => (
//         <Item key={index} {...item} />
//       ))}
//     </div>
//   );
// };

export default Item;
