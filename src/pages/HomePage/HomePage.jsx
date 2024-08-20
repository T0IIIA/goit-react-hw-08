import s from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={s.container}>
      <h2>Page Info</h2>
      <ul className={s.list}>
        <li>
          <img src='public/phonebook.png' alt='phonebook image' width={200} />
        </li>
        <li>
          <img src='public/phonebookScreenshot.png' alt='phonebook screenshot' width={400} className={s.screen} />
        </li>
      </ul>
    </div>
  )
}

export default HomePage