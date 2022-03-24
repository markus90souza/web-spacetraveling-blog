import Link from 'next/link';
import { GetStaticProps } from 'next';

import { FiCalendar, FiUser } from 'react-icons/fi';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';
import Header from '../components/Header';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
      <main className={commonStyles.container}>
        <Header />

        <section className={styles.blog}>
          <Link href="/">
            <a className={styles.post}>
              <article className={styles.post__container}>
                <header className={styles.post__header}>
                  <h2 className={styles.post__title}>Como utilizar Hooks</h2>
                </header>
                <p className={styles.post__description}>
                  Pensando em sincronização em vez de ciclos de vida.
                </p>
                <footer className={styles.post__footer}>
                  <ul>
                    <li>
                      <FiCalendar />
                      <span>19 marc 2021</span>
                    </li>

                    <li>
                      <FiUser />
                      <span>Marcos de Souza</span>
                    </li>
                  </ul>
                </footer>
              </article>
            </a>
          </Link>
        </section>

        <button type="button" className={styles.btn__loadmore}>
          Carregar mais posts
        </button>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
