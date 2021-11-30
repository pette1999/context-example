/* TODO: style me! */
export default function ItemCard({ name, img, stock, price, add, checkout}) {
    return <article className={checkout ? "cardOut" : "card"}>
        <div className={"img-wrapper"}>
            <img src={img} alt={name} />
        </div>
        <div className={"content"}>
        <h2 className={"plant-name"}>{name}</h2>
        <p className={"price"}>${price}</p>
        {
            !checkout && <button onClick={() => add(name)} className={stock <= 0 ? 'disabled' : ''}>Add to Cart</button>
        }
        </div>
    </article>
}