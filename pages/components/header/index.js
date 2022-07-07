import styles from './styles.module.css'
import Image from 'next/image'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleToggleMenu() {
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <header className={styles.pageHeader}>
      <nav>
        <div className={styles.logo}>
          <Image
            src='/assets/logo.svg'
            alt='sienno tecnologia'
            width={70}
            height={70}
          />
          <div>
            <h1>STEC</h1>
            <h2>sienno tec</h2>
          </div>
        </div>
        <button
          className={`${styles.openMenuButton}`}
          id='open-menu-button'
          onClick={handleToggleMenu}
        >
          <Image src='/assets/menu.svg' alt='Menu' width={70} height={70} />
        </button>
        <div
          className={`${styles.overlay} ${isMenuOpen && styles.overlayActive}`}
          id='overlay'
          onClick={handleToggleMenu}
        ></div>
        <div
          className={`${styles.menu}  ${isMenuOpen && styles.menuActive}`}
          id='menu'
        >
          <button
            className={styles.closeMenuButton}
            id='close-menu-button'
            onClick={handleToggleMenu}
          >
            <Image src='/assets/close.svg' alt='Menu' width={70} height={70} />
          </button>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#sobre'>Sobre</a>
            </li>
            <li>
              <a href='#doações'>Doações</a>
            </li>
            <li>
              <a href='#participe'>Participe</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
