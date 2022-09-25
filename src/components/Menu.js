
export default function Menu({ foodMenu }) {
  return (
    <div>
      <div className="itemContainer">{
        foodMenu.map((menuItem) => (
          <article key={menuItem.id}>
              <img
                src={menuItem.img}
                alt={menuItem.title}
                className="foodImage"
              />
            <div className="foodInfosContainer">
                <div className="foodPrice">
                    <p>{menuItem.title} </p>
                    <p>${menuItem.price}</p>
                </div>
                <div className="span"></div>
                <p>{menuItem.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
