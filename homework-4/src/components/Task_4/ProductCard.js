import { useState } from "react";
import Tooltip from "./Tooltip";

const ProductCard = ({ product, isLoading, error }) => {
    const [position, setPosition] = useState({ tooltipX: 0, tooltipY: 0 })
    const [isTooltipShown, setTooltipShown] = useState(false);

    const handleMouseMove = (e) => {
        setPosition({ tooltipX: e.clientX, tooltipY: e.clientY })
    };

    const handleMouseEnter = e => {
        setTooltipShown(true);
        setPosition({ tooltipX: e.clientX, tooltipY: e.clientY })
    };

    const handleMouseLeave = () => {
        setTooltipShown(false);
    };

    return (
        <div className="productCard" style={{ position: 'relative' }}>
            <img className="productImg"
                src={product.image}
                alt={product.title}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            {isLoading && <div>LOading...</div>}
            {error && <div>Error: {error}</div>}
            {isTooltipShown && (
                <Tooltip
                    tooltipX={position.tooltipX}
                    tooltipY={position.tooltipY}
                    content={
                        <div>
                            <h3>{product.title}</h3>
                            <p>Price: {product.price}USD</p>
                            <p>Rating: count {product.rating.count}, rate {product.rating.rate}</p>
                        </div>
                    }
                />
            )}
        </div>
    );
};














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


export default ProductCard