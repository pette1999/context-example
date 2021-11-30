import Head from 'next/head'
import ItemCard from '../components/ItemCard'
import { useUser } from '../context/UserContext'

export default function Checkout() {
  const { user, setUser } = useUser()

  const getTotalPrice = () => {
    var total = 0
     user.cart.map((p) => {
       total += p.price
       console.log(p.price)
     })
     return total
  }

  return (
    <div>
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="white">{user.name}, let's checkout!</h1>
        <p className="white">You have {user.cart.length} items in your cart.</p>
        <div>
          {
            /* TODO: Style the checkout page so the cart maps through
              * to a component for each item in the cart
            */
            user.cart.map((p) => {
              return (
                <ItemCard
                  name={p.name}
                  img={p.img}
                  price={p.price}
                  checkout={true}
                />
              )
            })
          }
        </div>
      </main>
       <p className="total">Total: ${getTotalPrice()}</p>
    </div>
  )
}
