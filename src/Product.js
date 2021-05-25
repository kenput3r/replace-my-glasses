/* global React */

export function Product({ product, setState, state }) {
  const handleChange = e => {
    setState({
      id: e.target.dataset.id,
      title: e.target.dataset.title,
      variantTitle: e.target.dataset.variantTitle,
      price: parseFloat(e.target.dataset.price).toFixed(2),
    })
  }
  const handleClick = e => {
    if (e.target.checked) {
      setState({
        title: "None",
        price: 0,
        id: 0,
      })
    }
  }
  return (
    <>
      {product.node.variants.edges.length === 1 ? (
        <div className="product-option">
          <img
            className="product-image"
            src={product.node.images.edges[0]?.node.transformedSrc}
            alt={product.node.images.edges[0]?.node.altText}
          />
          <div className="product-description">
            <h4>
              {product.node.title}
              <span>
                {" "}
                ($
                {parseFloat(
                  product.node.priceRange.minVariantPrice.amount
                ).toFixed(2)}{" "}
                USD)
              </span>
            </h4>
            <p>{product.node.description}</p>
          </div>
          <input
            type="radio"
            name={`${product.node.productType.replace(/\s/g, "")}`}
            id={`${product.node.id}`}
            aria-label={product.node.title}
            checked={
              state.id === product.node.variants.edges[0]?.node.metafield.id
            }
            data-id={product.node.variants.edges[0]?.node.metafield.id}
            data-title={product.node.title}
            data-price={product.node.priceRange.minVariantPrice.amount}
            onClick={handleClick}
            onChange={handleChange}
          />
          <div className="checkmark" />
        </div>
      ) : (
        <div className="product-option with-variants">
          <img
            className="product-image"
            src={product.node.images.edges[0]?.node.transformedSrc}
            alt={product.node.images.edges[0]?.node.altText}
          />
          <div className="product-description">
            <h4>
              {product.node.title}
              <span>
                {" "}
                ($
                {product.node.priceRange.minVariantPrice.amount !==
                product.node.priceRange.maxVariantPrice.amount
                  ? `${parseFloat(
                      product.node.priceRange.minVariantPrice.amount
                    ).toFixed(2)} - $${parseFloat(
                      product.node.priceRange.maxVariantPrice.amount
                    ).toFixed(2)}`
                  : parseFloat(
                      product.node.priceRange.minVariantPrice.amount
                    ).toFixed(2)}{" "}
                USD)
              </span>
            </h4>
            <p>{product.node.description}</p>
          </div>
          <ul className="variants">
            {product.node.variants.edges.map(variant => (
              <li key={variant.node.id}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img
                  className="variant-image"
                  src={variant.node.image?.transformedSrc}
                  alt={variant.node.image?.altText}
                />
                <div className="variant-description">
                  <h6>
                    {variant.node.title}
                    <small>
                      {" "}
                      (${parseFloat(variant.node.priceV2.amount).toFixed(2)})
                    </small>
                  </h6>
                  <p>
                    <small>{variant.node.image?.altText}</small>
                  </p>
                </div>
                <input
                  type="radio"
                  name={`${product.node.productType.replace(/\s/g, "")}`}
                  id={`${variant.node.id}`}
                  aria-label={variant.node.title}
                  checked={state.id === variant.node.metafield.id}
                  data-id={variant.node.metafield.id}
                  data-title={product.node.title}
                  data-variant-title={variant.node.title}
                  data-price={variant.node.priceV2.amount}
                  onChange={handleChange}
                />
                <div className="checkmark" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
