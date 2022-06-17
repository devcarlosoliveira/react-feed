import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from '../Avatar/Avatar';
export function Comment() {
  return (
    <div className={styles.comment}>
        <Avatar 
          src="https://github.com/devcarlosoliveira.png" 
          alt="avatar" 
        />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
              <strong>Carlos Oliveira</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
              </div>

              <button title="Deletar comentário">
                <Trash size={24} />
              </button>
            </header>
            <p>Muito bom Carlos, parabéns!!</p>
            </div>
            <footer>
              <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
              </button>
            </footer>
        </div>
    </div>

  );

}
