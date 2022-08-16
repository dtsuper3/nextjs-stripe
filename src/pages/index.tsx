import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useMemo } from 'react'
import checkout from '../components/checkout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const items = useMemo(() => [
    {
      name: "NFT 1",
      price: "price_1LXT5VANN4IBivRWwoiTnLc8",
    },
    {
      name: "NFT 2",
      price: "price_1LXT6UANN4IBivRWAwvIeaBf",
    }
  ], []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Stripe</title>
        <meta name="description" content="Next.js Stripe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: "flex" }}>
        {
          items.map((item, index) => (
            <div key={index} style={{ width: "300px", height: "300px", marginRight: "20px" }}>
              <h4>{item.name}</h4>
              <button onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: item.price,
                      quantity: 1
                    }
                  ]
                })
              }}>Buy</button>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Home
