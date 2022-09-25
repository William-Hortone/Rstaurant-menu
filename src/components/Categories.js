
export default function Category({handlefilterFood}){


    return(
        <div>
            <div className="btn-container">
                <button className='btn' onClick={() => handlefilterFood('all')} >All</button>
                <button className="btn" onClick={() => handlefilterFood('dinner')}>Dinner</button>
                <button className="btn" onClick={() => handlefilterFood('pizza')}>Pizza</button>
                <button className="btn" onClick={() => handlefilterFood('drink')}>Drink</button>
            </div>
        </div>
    )
};