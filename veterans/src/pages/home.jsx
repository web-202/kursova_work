import { Outlet } from 'react-router-dom'
import '../styles/home.css'
import Logo from '../img/modlogo.svg'

export default function Home() {
  return (
    <>
      <header className="my-header">
        <div className="my-header__container"><img src={Logo} alt="Logo" style={{width: '100px', height: '100px'}}/>
          <h3 className="my-header__title">Web портал для військових ветеранів та їх підтримки</h3>
        </div>
      </header>

      <Outlet />

      <footer className='footer'>
        <p>© 2022. Всі права захищені. Розробив курсант 202 навчальної групи Бурденко А. О.</p>
      </footer>
    </>

  )
}