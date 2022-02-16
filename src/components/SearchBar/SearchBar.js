import './SearchBar.css'

const SearchBar = ({search,handleKeyUp}) => {

  return (
    <>
    <form>
      <input type="text" name="search" onKeyUp={handleKeyUp} className='w-100'/>
    </form>
    <p>{search.length>0?search.length<7?`Buscando ${search}`:`Buscando ${search.slice(0,6)}...`:''}</p>
    </>

   );
}
 
export default SearchBar;