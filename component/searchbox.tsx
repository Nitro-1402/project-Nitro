import React, { useState } from 'react';
import style from '/styles/searchbox.module.css';
import '@fortawesome/fontawesome-free/css/all.css';
interface SearchBoxProps {
  placeholder: string;
  onSearch: (searchTerm: string, searchResults: any[]) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ placeholder, onSearch,setmovies }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };  

  const handleSearchClick = () => {
    fetch(`https://nitroback.pythonanywhere.com/movies/movies/?search=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setmovies(data.results)
        
        setSearchResults(data.results);
        onSearch(searchTerm, data.results);
      })
      .catch(error => console.error(error));
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <div>
      <input className={style.inpsrch}
        type="text"
        dir='rtl'
        placeholder="نام فیلم و بازیگر"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} />
      <button className={style.searchbtn} onClick={handleSearchClick}  dir='rtl'>جست و جو</button>
      {/* <ul>
        {searchResults.map((result: any) => (
          <li className={style.lires} key={result.id}>{result.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default SearchBox;



