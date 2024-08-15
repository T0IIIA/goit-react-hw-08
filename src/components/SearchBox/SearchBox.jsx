import { useDispatch } from 'react-redux'
import s from './SearchBox.module.css'
import { filter } from '../../redux/filtersSlice'



const SearchBox = () => {
  const dispatch = useDispatch()

  const onSearch = (e) => {
    dispatch(filter(e.target.value))
  }

  return (
      <div className={s.container}>
        <label>Find contacts by name:</label>
        <input 
          type='text' 
          name='search' 
          onChange={onSearch} 
          placeholder="Search" 
          className={s.input} 
        />
      </div>
  )
}

export default SearchBox