import Image from 'next/image';
import navStyles from './NavBar.module.css';

export default function NavBar() {
  return (
    <div className={navStyles.c_navbar}>
      <img src='https://img.icons8.com/?size=512&id=84994&format=png' height="20px" width="20px" alt='back' />
      <a href='https://practo.com'><Image className={navStyles.c_navbar_logo} src="https://www.practostatic.com/nav/9.5.18/consumer/images/practo.svg" width="100" height="44" alt="Practo" /></a>
      <img className={navStyles.c_navbar_search} src="/search.svg" height="20px" width="20px" alt="search" />
    </div>
  )
}