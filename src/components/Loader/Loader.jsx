import s from './Loader.module.css'
import { Triangle } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className={s.container}>
      <Triangle
        visible={true}
        height='180'
        width='180'
        color='#80807F'
        ariaLabel='triangle-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
      <h3>LOADING</h3>
    </div>
  )
}

export default Loader
