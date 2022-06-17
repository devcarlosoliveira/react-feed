import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://picsum.photos/200" 
        alt="avatar"
      />

      <div className={styles.profile}>
        <Avatar
          hasBorder
          src="https://github.com/devcarlosoliveira.png" 
          alt="avatar" 
        />
        <strong>Carlos Oliveira</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}