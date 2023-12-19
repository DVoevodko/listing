interface IMainImage {
    url_570xN: string
}

interface IItem {
    listing_id: number //— уникальный идентификатор предложения, число;
    url: string // — ссылка на предложение, строка;
    MainImage: IMainImage // — информация об изображении, объект, нам необходимо использовать свойство url_570xN для получения адреса главной картинки, строка;
    title: string // — название предложения, строка;
    currency_code: string // — код валюты, строка;
    price: string // — цена, строка;
    quantity: number // — доступное количество, число.
}
type TItemsProps = {
    items : IItem[]
  }
  
export const Listing = ({items}:TItemsProps) => {
    return (
        <div className="item-list">
        {items.map((item) => (
          <>
          <div className="item">
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage.url_570xN} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{item.title}</p>
              <p className="item-price">
                {(item.currency_code==='USD')?'$':(item.currency_code==='EUR')?'€':''}
                {item.price}
                {(item.currency_code!=='USD'&&item.currency_code!=='EUR')?' GBP':''}
              </p>
              <p className={(item.quantity<=10)?"item-quantity level-low":(item.quantity<=20)?"item-quantity level-medium":"item-quantity level-high"}>
                {item.quantity} left
              </p>
            </div>
          </div>
            </>           
            ))
        }
        </div>
    )
}