import styles from './Post.module.css';
import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';

export function Post() {
    return (
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar 
              hasBorder
              src="https://github.com/devcarlosoliveira.png" 
              alt="avatar" 
            />
            <div className={styles.authorInfo}>
              <strong>Carlos Oliveira</strong>
              <span>Web Developer</span>
            </div>
          </div>
          <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Publicado há 1h </time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraaaa</p>
          <p>Acabei de subir mais um projeto</p>
          <p>
            <a href="">Carlos.Oliveira/web</a>
            <a href="">#novoprojeto</a>{' '}
            <a href="">#nlw</a>{' '}
            <a href="">#rocketseat</a>
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          
          <textarea placeholder="Deixe um comentário" />
          
          <footer>
            <button type="submit">Comentar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    );
}