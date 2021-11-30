import Head from 'next/head'
import Link from 'next/link'
import ItemCard from '../components/ItemCard'
import { useItems } from '../context/ItemContext'
import { useUser } from '../context/UserContext'
import {useEffect, useState} from 'react'

export default function Home() {
  const [loading, setLoading] = useState (false)

  /* Get access to the User Context 
   * In this case, we don't need the u
   */
  const { user, setUser } = useUser()

  /* TODO: import your useItems context
   * and map through all of the items
   * to create a gallery of ItemCard components
  */
 const { items, setItems } = useItems()

 useEffect(() => {
    setLoading(false)
    setCartNumber()
  }, [loading])

  const addToCart = (itemName) => {
    /* TODO: Write function that updates the
      * user context object's cart 
      * to include the added item
    */
     items.map((p) => {
       if (itemName == p.name) {
         user.cart.push(p)
       }
     })
     setLoading(true)
  }

  const setCartNumber = () => {
    return user.cart.length
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="top">
        <h1>Hey there, {user.name}</h1>
        <Link href="/cart" >
          <div class="cart">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <p>{setCartNumber()}</p>
        </div>
        </Link>
        </div>
        <div class="gallery">
          {
            /* TODO: Map through the items in context 
            * to display an ItemCard with the data for each
            */
            items.map((p) => {
              return (
                <ItemCard
                  name={p.name}
                  img={p.img}
                  stock={p.stock}
                  price={p.price}
                  add={addToCart}
                  checkout={false}
                />
              )
            })
          }
        </div>
      </main>
    </div>
  )
}
