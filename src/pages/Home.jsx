import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Categories, SortPopup, PizzaBlock} from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters'  




const Home = () => {

    const dispatch = useDispatch()

    const onSelectCategory = index => {
        dispatch(setCategory(index))
    }
  

    const items = useSelector(({pizzas}) => pizzas.items)
 
    return (
        <div className="container">
        <div className="content__top">
            <Categories 
            onClickItems = {onSelectCategory}
            items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
            <SortPopup items={[
             {name: 'популярности', type: 'popular' },
             {name:'цене', type: 'price'}, 
             {name:'алфавиту', type: 'alphabet'}]} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                
                {items && items.map((item) => {
                    return (
                        <PizzaBlock key={item.id} {...item} />
                    )
                })}
                
            </div>
      </div>
    )
}

export default Home

