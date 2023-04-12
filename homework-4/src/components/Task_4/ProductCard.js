import { useState } from "react";
import ToolTip from "./Tooltip";

const ProductCard = ({ products, render }) => {
    const [isTooltipShown, setIsTooltipShown] = useState(false)
    const [tooltipX, setTooltipX] = useState(0)
    const [tooltipY, setTooltipY] = useState(0)

    const handleTooltipEnter = () => {
        setIsTooltipShown(true)
    }

    const handleTooltipLeave = () => {
        setIsTooltipShown(false)
    }

    const handlerMouseMove = (e) => {
        setTooltipX(e.clientX)
        setTooltipY(e.clientY)
    }
    return (
        <>
            {products.map(product =>  <li key={product.id}
                onMouseMove={handlerMouseMove}
                onMouseEnter={handleTooltipEnter}
                onMouseLeave={handleTooltipLeave}
                style={{
                    listStyle: "none",
                    width: 300,
                    background: "pink",
                    position: "relative"
                }}>

                <img src={product.image} alt="" width={200} height={200} />
                <h5>{product.title}</h5>
                <p>{product.description}</p>
                <hr />
            </li> )}
                  
            {isTooltipShown && <ToolTip x={tooltipX} y={tooltipY} content={products}>
              {render(products)}
            </ToolTip>}
            










  {/* // контейнер для тултипа
                        <li
                            onMouseMove={handlerMouseMove}
                            onMouseEnter={handleTooltipEnter}
                            onMouseLeave={handleTooltipLeave}
                            style={{
                                listStyle: "none",
                                width: 300,
                                background: "pink",
                                position: "relative"
                            }}>
            
                            <img src={product.image} alt="" width={200} height={200} />
                            <h5>{product.title}</h5>
                            <p>{product.description}</p>
                            <hr />
                        </li> */}



        </>

    )
}
export default ProductCard