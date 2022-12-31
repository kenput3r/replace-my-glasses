/* global React */
/* global ReactDOM */

import { Product } from "./Product"
import { PrescriptionForm } from "./PrescriptionForm"
import { ProductSkeleton } from "./ProductSkeleton"

// to do
// Handle image too large for cloudinary

const endpoint = `https://replace-my-glasses.myshopify.com/api/2022-10/graphql.json`

const query = `{
  collectionByHandle(handle: "lens-customization") {
    products(first: 50) {
      edges {
        node {
          id
          description
          images(first: 1) {
            edges {
              node {
                altText
                transformedSrc(maxWidth: 100, crop: CENTER)
              }
            }
          }
          productType
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 50) {
            edges {
              node {
                id
                image {
                  altText
                  transformedSrc(maxWidth: 200, crop: CENTER)
                }
                title
                priceV2 {
                  amount
                  currencyCode
                }
                selectedOptions {
                  name
                  value
                }
                metafield(namespace: "rmg", key: "v_id") {
                  id: value
                }
              }
            }
          }
          title
        }
      }
    }
  }
}`
const headers = {
  "Content-type": "application/json",
  Accept: "application/json",
  "X-Shopify-Storefront-Access-Token": process.env.STOREFRONT_TOKEN,
}

async function getCollection() {
  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({ query }),
  })
  const collection = await response.json()
  return collection
}

function objToString(obj) {
  let string = ""
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i]
    string = string.concat(`${key}: ${obj[key]}`)
    if (i + 1 !== keys.length) {
      string = string.concat(", ")
    }
  }
  return string
}

function PageBuild({ data }) {
  const [lensStyles, setLensStyles] = React.useState(null)
  const [lensTypes, setLensTypes] = React.useState(null)
  const [lensMaterials, setLensMaterials] = React.useState(null)
  const [lensExtras, setLensExtras] = React.useState(null)
  const [selectedLensStyle, setSelectedLensStyle] = React.useState({
    title: "None",
    price: 0,
    id: 0,
  })
  const [selectedLensType, setSelectedLensType] = React.useState({
    title: "None",
    price: 0,
    id: 0,
  })
  const [selectedLensMaterial, setSelectedLensMaterial] = React.useState({
    title: "None",
    price: 0,
    id: 0,
  })
  const [selectedLensExtras, setSelectedLensExtras] = React.useState({
    title: "None",
    price: 0,
    id: 0,
  })
  const [leftEye, setLeftEye] = React.useState({})
  const [rightEye, setRightEye] = React.useState({})
  const [file, setFile] = React.useState(null)
  const [showReview, setShowReview] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  const [showLoader, setShowLoader] = React.useState(false)

  const scrollToRef = React.useRef(null)

  const centerEl = () => scrollToRef.current.scrollIntoView()

  const addToCart = async () => {
    setShowLoader(true)
    centerEl()
    const customizationId = parseInt(Math.random() * (11000 - 10000) + 10000)
    const items = []
    const properties = { "Customization ID": customizationId }
    if (file) {
      const cloudName = "kenput3r1"
      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/upload`
      const formData = new FormData()
      formData.append("file", file)
      formData.append("upload_preset", "oolgpfo2")
      const uploadResponse = await fetch(cloudinaryUrl, {
        method: "POST",
        body: formData,
      })
      const uploadJson = await uploadResponse.json()
      console.log(uploadJson)
      properties.Attachment = uploadJson.secure_url
    }
    if (leftEye.SPH) {
      properties["Left Eye"] = objToString(leftEye)
      properties["Right Eye"] = objToString(rightEye)
    }
    console.log(properties)
    items.push({
      id: parseInt(selectedLensStyle.id),
      quantity: 1,
      properties,
    })
    items.push({
      id: parseInt(selectedLensType.id),
      quantity: 1,
      properties: { "Customization ID": customizationId },
    })
    items.push({
      id: parseInt(selectedLensMaterial.id),
      quantity: 1,
      properties: { "Customization ID": customizationId },
    })
    if (selectedLensExtras.id) {
      items.push({
        id: parseInt(selectedLensExtras.id),
        quantity: 1,
        properties: { "Customization ID": customizationId },
      })
    }
    console.log("items", items)
    const response = await fetch("/cart/add.js", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "xmlhttprequest",
      },
      body: JSON.stringify({ items }),
    })
    const Json = await response.json()
    console.log(Json)
    if (Json.items) {
      window.location.href = "/checkout"
    }
  }

  const validatePrescription = () => {
    if (file) {
      return true
    }
    if (
      leftEye.SPH &&
      leftEye.CYL &&
      leftEye.Axis &&
      leftEye.PD &&
      rightEye.SPH &&
      rightEye.CYL &&
      rightEye.Axis &&
      rightEye.PD
    ) {
      return true
    }
    return false
  }

  const toggleShowReview = () => {
    if (
      selectedLensType.id &&
      selectedLensStyle.id &&
      selectedLensMaterial.id &&
      validatePrescription()
    ) {
      setShowReview(true)
      centerEl()
    } else {
      alert(
        "All options are required except Lens Extras. Please make your selections and fill out your prescription or attach a photo of your prescription before proceeding."
      )
    }
  }

  React.useEffect(() => {
    ;(async function () {
      const collection = await getCollection()
      const products = collection.data.collectionByHandle.products.edges

      const _lensStyles = products.filter(
        product => product.node.productType === "Lens Style"
      )
      const _lensTypes = products.filter(
        product => product.node.productType === "Lens Type"
      )
      const _lensMaterials = products.filter(
        product => product.node.productType === "Lens Material"
      )
      const _lensExtras = products.filter(
        product => product.node.productType === "Lens Extras"
      )

      setLensStyles(_lensStyles)
      setLensTypes(_lensTypes)
      setLensMaterials(_lensMaterials)
      setLensExtras(_lensExtras)
      setIsLoading(false)
    })()
  }, [])

  React.useEffect(() => {
    if (file?.size >= 10000000) {
      alert(
        "Your image is too large. Please choose an image that is less than 10MB"
      )
      setFile(null)
    }
  }, [file])
  if (!showReview)
    return (
      <>
        <form ref={scrollToRef}>
          <div className="step">
            <h3>
              Lens Styles <img src={data.chevron} alt="below" />
            </h3>

            {isLoading && (
              <>
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
              </>
            )}

            {lensStyles &&
              lensStyles.map(product => (
                <Product
                  key={product.node.id}
                  product={product}
                  setState={setSelectedLensStyle}
                  state={selectedLensStyle}
                />
              ))}
          </div>

          <div className="step">
            <h3>
              Lens Types <img src={data.chevron} alt="below" />
            </h3>

            {isLoading && (
              <>
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
              </>
            )}

            {lensTypes &&
              lensTypes.map(product => (
                <Product
                  key={product.node.id}
                  product={product}
                  setState={setSelectedLensType}
                  state={selectedLensType}
                />
              ))}
          </div>

          <div className="step">
            <h3>
              Lens Materials <img src={data.chevron} alt="below" />
            </h3>

            {isLoading && (
              <>
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
              </>
            )}

            {lensMaterials &&
              lensMaterials.map(product => (
                <Product
                  key={product.node.id}
                  product={product}
                  setState={setSelectedLensMaterial}
                  state={selectedLensMaterial}
                />
              ))}
          </div>

          <div className="step">
            <h3>
              Lens Extras (Optional) <img src={data.chevron} alt="below" />
            </h3>

            {isLoading && (
              <>
                <ProductSkeleton />
                <ProductSkeleton />
              </>
            )}

            {lensExtras &&
              lensExtras.map(product => (
                <Product
                  key={product.node.id}
                  product={product}
                  setState={setSelectedLensExtras}
                  state={selectedLensExtras}
                />
              ))}
          </div>

          <div>
            <h3>
              Prescription <img src={data.chevron} alt="below" />
            </h3>
            <PrescriptionForm
              setFile={setFile}
              file={file}
              leftEye={leftEye}
              setLeftEye={setLeftEye}
              rightEye={rightEye}
              setRightEye={setRightEye}
            />
          </div>
        </form>
        <button
          className="toggle-review"
          type="button"
          onClick={toggleShowReview}
        >
          <span>REVIEW AND SUBMIT</span>
        </button>
      </>
    )
  return (
    <div id="Review" ref={scrollToRef}>
      {showLoader ? (
        <div className="loader-container">
          <img src={data.loader} alt="loading" />
          <p className="h4 text-center">Building your order</p>
        </div>
      ) : (
        <>
          <div className="review-option">
            <div className="title h4">LENS STYLE</div>
            <div className="values">
              <span>{selectedLensStyle.title}</span>
              <span>${selectedLensStyle.price}</span>
            </div>
          </div>

          <div className="review-option">
            <div className="title h4">LENS TYPE</div>
            <div className="values">
              <span>
                {selectedLensType.title}
                {selectedLensType.variantTitle &&
                  `: ${selectedLensType.variantTitle}`}
              </span>
              <span>${selectedLensType.price}</span>
            </div>
          </div>

          <div className="review-option">
            <div className="title h4">LENS MATERIAL</div>
            <div className="values">
              <span>{selectedLensMaterial.title}</span>
              <span>${selectedLensMaterial.price}</span>
            </div>
          </div>

          <div className="review-option">
            <div className="title h4">LENS EXTRAS</div>
            <div className="values">
              <span>{selectedLensExtras.title}</span>
              <span>${selectedLensExtras.price}</span>
            </div>
          </div>

          <div className="review-option subtotal">
            <div className="values text-right">
              <span>SUBTOTAL</span>
              <span>
                $
                {(
                  parseFloat(selectedLensStyle.price) +
                  parseFloat(selectedLensType.price) +
                  parseFloat(selectedLensMaterial.price) +
                  parseFloat(selectedLensExtras.price)
                ).toFixed(2)}
              </span>
            </div>
            <div className="buttons">
              <button type="button" onClick={() => setShowReview(false)}>
                {" "}
                <span>&larr; edit selection</span>
              </button>
              <button type="button" onClick={addToCart}>
                <span>add to cart &rarr;</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

const domContainer = document.querySelector("#BuildForm")
const _data = domContainer.dataset
ReactDOM.render(<PageBuild data={_data} />, domContainer)
