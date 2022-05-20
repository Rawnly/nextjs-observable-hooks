import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import styles from '../styles/Home.module.css'
import List from '../data/List'

// const List = dynamic(() => import('../data/List'), {
//   suspense: true
// })

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>ciao</h1>

      <Suspense fallback={<p>Loading</p>}>
        <List />
      </Suspense>
    </div>
  )
}

export default Home
