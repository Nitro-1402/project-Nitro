import React, { useState } from 'react';
import style from '/styles/searchbox.module.css';
import '@fortawesome/fontawesome-free/css/all.css';
interface SearchBoxProps {
  placeholder: string;
  onSearch: (searchTerm: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ placeholder, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };  

  // const handleSearchClick = () => {
  //   fetch(`https://nitroback.pythonanywhere.com/movies/movies/?search=${searchTerm}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data.results)
  //       setmovies(data.results)
        
  //       setSearchResults(data.results);
  //       onSearch(searchTerm, data.results);
  //     })
  //     .catch(error => console.error(error));
  // };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <div className={style.container } >
      <input className={style.inpsrch}
        type="text"
        dir='rtl'
        placeholder="نام فیلم ، کارگردان و بازیگر"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        style={{textAlign:"center"}} />
      <button className={style.searchbtn} onClick={()=>onSearch(searchTerm)}  dir='rtl'>جست و جو</button>
      {/* <ul>
        {searchResults.map((result: any) => (
          <li className={style.lires} key={result.id}>{result.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default SearchBox;



