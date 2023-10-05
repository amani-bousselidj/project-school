import React ,{useState} from 'react'

export const Search = () => {
const [search, setSearch] = useState(false);
const toggleSearch =()=>{
    setSearch(!search)
    if(!search){
        document.documentElement.style.overflowY = "hidden";
    }
    else{
        document.documentElement.style.overflowY = "scroll";
    }
}
  return (
    <div className='search'>
        <button type="button" className="btn" onClick={toggleSearch}>
         <i className="fas fa-search"></i>
        </button> 
        {search && ( <div className='search-model'>
        <div className='overlay d-flex justify-content-center align-items-center'>
            <div className='search-contant'>
                 <form className="form-outline">
                <input id='search-focus' className="form-control" type="text" placeholder='Search'  />
                <label className="form-label" for="search-focus"></label>
                <button type="submit"><i className='fas fa-search'></i></button>
                 </form>
            </div>
            <button className='close-model'onClick={toggleSearch}>
               <i className="fas fa-close"></i>
            </button>
        </div>    
        </div>)}
       
     </div>
  )
}
