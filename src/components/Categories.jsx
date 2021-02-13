import React, {useState} from 'react'

const Categories = ({items,  }) => {

    const [activeItem, setActiveItem] = useState(null)

    const setItem = (index) => {
        setActiveItem(index)
        onClickItems(index)

    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active': ''} onClick={() => setActiveItem(null)}>Все</li>
                {items && items.map((name, index) => {
                    return (
                        <li className={activeItem === index ? 'active': ''}
                        onClick={() => setItem(index)} 
                        key={index}>{name}</li>
                    )
                })}
            </ul>
      </div>
    )
}

export default Categories
