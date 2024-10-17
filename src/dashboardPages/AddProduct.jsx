import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { PRODUCTS } from "../constants/constants";
import { postCall } from "../services/authServices/axios/apiCall";
import ENDPOINTS from "../api/endpoints";
import { useUserContext } from "../context/userContext.jsx";
export default function AddProduct() {
  const { id } = useParams();
  const { userEmail } = useUserContext();
  console.log("productToEdit", id);
  console.log("userEmail", userEmail);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  //
  const [productCategory, setProductCategory] = useState("");
  // const [productSubcategory, setProductSubcategory] = useState("");
  const [productSKU, setProductSKU] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productWeight, setProductWeight] = useState("");
  const [productDimensions, setProductDimensions] = useState("");
  const [productColorVariations, setProductColorVariations] = useState("");
  const [productTags, setProductTags] = useState("");
  const [productShippingInfo, setProductShippingInfo] = useState("");
  const [productStockStatus, setProductStockStatus] = useState("");
  const [productDiscount, setProductDiscount] = useState("");
  // const [productFeaturedImage, setProductFeaturedImage] = useState("");
  const [productAdditionalImages, setProductAdditionalImages] = useState("");
  const [productInstructions, setProductInstructions] = useState("");
  const [productReturnPolicy, setProductReturnPolicy] = useState("");
  const [productWarranty, setProductWarranty] = useState("");
  const [productDateAdded, setProductDateAdded] = useState(
    new Date().toISOString().split("T")[0]
  ); // Default to today's date
  const [productStatus, setProductStatus] = useState("active");
  const [productSEOTitle, setProductSEOTitle] = useState("");
  const [productSEODescription, setProductSEODescription] = useState("");
  const [productSEOKeywords, setProductSEOKeywords] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  //
  useEffect(() => {
    if (id) {
      const fetchedProduct = PRODUCTS.find((item) => item.id == id);
      console.log("fetchedProduct", fetchedProduct);
      if (fetchedProduct) {
        setProductName(fetchedProduct.productName);
        setProductPrice(fetchedProduct.productPrice);
        // setProductImage(fetchedProduct.productImage);
        setProductDescription(fetchedProduct.productDescription);
        setIsEditing(true);
      }
    }
  }, [id]);
  const formSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!isEditing) {
        const formData = new FormData();
        formData.append("productName", productName);
        formData.append("productPrice", productPrice);
        formData.append("productImage", e.target.productImage.files[0]);
        formData.append("productDescription", productDescription);
        formData.append("userEmail", userEmail);
        formData.append('productCategory',productCategory);
        // formData.append("productSubcategory",productSubcategory);
        formData.append("productSKU",productSKU);
        formData.append("productBrand",productBrand);
        formData.append("productWeight",productWeight);
        formData.append("productDimensions",productDimensions);
        formData.append("productColorVariations",productColorVariations);
        formData.append("productTags",productTags);
        formData.append("productShippingInfo",productShippingInfo);
        formData.append("productStockStatus",productStockStatus);
        formData.append("productDiscount",productDiscount);
        // formData.append("productFeaturedImage",productFeaturedImage);
        formData.append("productAdditionalImages",productAdditionalImages);
        formData.append("productInstructions",productInstructions);
        formData.append("productReturnPolicy",productReturnPolicy);
        formData.append("productWarranty",productWarranty);
        formData.append("productDateAdded",productDateAdded);
        formData.append("productStatus",productStatus);        
        formData.append("productSEOTitle",productSEOTitle);
        formData.append("productSEODescription",productSEODescription);
        formData.append("productSEOKeywords",productSEOKeywords);

        const params = {
          apiEndpoint: ENDPOINTS?.dev?.PRODUCT_MODULE?.addProduct,
          data: formData,
        };

        console.log("Params", params);
        const response = await postCall(params);
        console.log("Responseeee", response);
      } else {
        console.log("In editing mode");
      }
      setProductName("");
      setProductPrice("");
      setProductDescription("");
      setProductImage("");
    } catch (error) {}
  };
  return (
    <div className="flex p-20 justify-center w-full border border-black shadow-xl rounded-lg">
      <div className="w-full">
        <form action="" onSubmit={formSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="productName"
                className="block text-sm font-medium text-gray-700"
              >
                Name of Product
              </label>
              <input
                type="text"
                name="productName"
                id="productName"
                placeholder="Name of product"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="productPrice"
                className="block text-sm font-medium text-gray-700"
              >
                Price of the Item
              </label>
              <input
                type="text"
                name="productPrice"
                id="productPrice"
                placeholder="Price of the item"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="productImage"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Image
              </label>
              <input
                type="file"
                name="productImage"
                id="productImage"
                placeholder="Upload Image"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="productDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <input
                type="text"
                name="productDescription"
                id="productDescription"
                placeholder="Description"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </div>
            {/* These are new fields from this line */}
            <div>
              <label
                htmlFor="productQuantity"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity
              </label>
              <input
                type="text"
                name="productQuantity"
                id="productQuantity"
                placeholder="Quantity"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productQuantity}
                onChange={(e) => setProductQuantity(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="productCategory"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                name="productCategory"
                id="productCategory"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                <option value="">Clothing</option>
                <option value="">Electronics</option>
                <option value="">Furniture</option>
                <option value="">Study</option>
                <option value="">Educational</option>
                <option value="">Beauty & more</option>
                <option value="">Gadgets</option>
                <option value="">Toys,Baby</option>
                <option value="">Food & Health</option>
                <option value="">Sports</option>
              </select>
            </div>

            {/* <div>
              <label
                htmlFor="productSubcategory"
                className="block text-sm font-medium text-gray-700"
              >
                Subcategory
              </label>
              <select
                name="productSubcategory"
                id="productSubcategory"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productSubcategory}
                onChange={(e) => setProductSubcategory(e.target.value)}
              >
                <option value="">Select Subcategory</option>
              </select>
            </div> */}

            <div>
              <label
                htmlFor="productSKU"
                className="block text-sm font-medium text-gray-700"
              >
                SKU
              </label>
              <input
                type="text"
                name="productSKU"
                id="productSKU"
                placeholder="SKU"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productSKU}
                onChange={(e) => setProductSKU(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="productBrand"
                className="block text-sm font-medium text-gray-700"
              >
                Brand
              </label>
              <input
                type="text"
                name="productBrand"
                id="productBrand"
                placeholder="Brand"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productBrand}
                onChange={(e) => setProductBrand(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="productWeight"
                className="block text-sm font-medium text-gray-700"
              >
                Weight
              </label>
              <input
                type="text"
                name="productWeight"
                id="productWeight"
                placeholder="Weight"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productWeight}
                onChange={(e) => setProductWeight(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="productDimensions"
                className="block text-sm font-medium text-gray-700"
              >
                Dimensions
              </label>
              <input
                type="text"
                name="productDimensions"
                id="productDimensions"
                placeholder="L x W x H"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productDimensions}
                onChange={(e) => setProductDimensions(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="productColorVariations"
                className="block text-sm font-medium text-gray-700"
              >
                Color/Variations
              </label>
              <input
                type="text"
                name="productColorVariations"
                id="productColorVariations"
                placeholder="Color/Variations"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productColorVariations}
                onChange={(e) => setProductColorVariations(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="productTags"
                className="block text-sm font-medium text-gray-700"
              >
                Tags
              </label>
              <input
                type="text"
                name="productTags"
                id="productTags"
                placeholder="Tags (comma separated)"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productTags}
                onChange={(e) => setProductTags(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="productShippingInfo"
                className="block text-sm font-medium text-gray-700"
              >
                Shipping Information
              </label>
              <textarea
                name="productShippingInfo"
                id="productShippingInfo"
                placeholder="Shipping Information"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productShippingInfo}
                onChange={(e) => setProductShippingInfo(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="productStockStatus"
                className="block text-sm font-medium text-gray-700"
              >
                Stock Status
              </label>
              <select
                name="productStockStatus"
                id="productStockStatus"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productStockStatus}
                onChange={(e) => setProductStockStatus(e.target.value)}
              >
                <option value="">Select Stock Status</option>
                <option value="in-stock">In Stock</option>
                <option value="out-of-stock">Out of Stock</option>
                <option value="backordered">Backordered</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="productDiscount"
                className="block text-sm font-medium text-gray-700"
              >
                Discount/Promotion
              </label>
              <input
                type="number"
                name="productDiscount"
                id="productDiscount"
                placeholder="Discount Percentage"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productDiscount}
                onChange={(e) => setProductDiscount(e.target.value)}
              />
            </div>

            {/* <div>
              <label
                htmlFor="productFeaturedImage"
                className="block text-sm font-medium text-gray-700"
              >
                Featured Image URL
              </label>
              <input
                type="text"
                name="productFeaturedImage"
                id="productFeaturedImage"
                placeholder="Featured Image URL"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productFeaturedImage}
                onChange={(e) => setProductFeaturedImage(e.target.value)}
              />
            </div> */}

            <div>
              <label
                htmlFor="productAdditionalImages"
                className="block text-sm font-medium text-gray-700"
              >
                Additional Images URL (comma separated)
              </label>
              <textarea
                name="productAdditionalImages"
                id="productAdditionalImages"
                placeholder="Additional Image URLs"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productAdditionalImages}
                onChange={(e) => setProductAdditionalImages(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="productInstructions"
                className="block text-sm font-medium text-gray-700"
              >
                Product Instructions/Care Instructions
              </label>
              <textarea
                name="productInstructions"
                id="productInstructions"
                placeholder="Instructions or Care Instructions"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productInstructions}
                onChange={(e) => setProductInstructions(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="productReturnPolicy"
                className="block text-sm font-medium text-gray-700"
              >
                Return Policy
              </label>
              <textarea
                name="productReturnPolicy"
                id="productReturnPolicy"
                placeholder="Return Policy"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productReturnPolicy}
                onChange={(e) => setProductReturnPolicy(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="productWarranty"
                className="block text-sm font-medium text-gray-700"
              >
                Warranty Information
              </label>
              <textarea
                name="productWarranty"
                id="productWarranty"
                placeholder="Warranty Information"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productWarranty}
                onChange={(e) => setProductWarranty(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="productDateAdded"
                className="block text-sm font-medium text-gray-700"
              >
                Date Added
              </label>
              <input
                type="date"
                name="productDateAdded"
                id="productDateAdded"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productDateAdded}
                onChange={(e) => setProductDateAdded(e.target.value)}
                readOnly // Optionally make this read-only if set automatically
              />
            </div>

            <div>
              <label
                htmlFor="productStatus"
                className="block text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <select
                name="productStatus"
                id="productStatus"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productStatus}
                onChange={(e) => setProductStatus(e.target.value)}
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="productSEOTitle"
                className="block text-sm font-medium text-gray-700"
              >
                SEO Title
              </label>
              <input
                type="text"
                name="productSEOTitle"
                id="productSEOTitle"
                placeholder="SEO Title"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productSEOTitle}
                onChange={(e) => setProductSEOTitle(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="productSEODescription"
                className="block text-sm font-medium text-gray-700"
              >
                SEO Description
              </label>
              <textarea
                name="productSEODescription"
                id="productSEODescription"
                placeholder="SEO Description"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productSEODescription}
                onChange={(e) => setProductSEODescription(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="productSEOKeywords"
                className="block text-sm font-medium text-gray-700"
              >
                SEO Keywords
              </label>
              <input
                type="text"
                name="productSEOKeywords"
                id="productSEOKeywords"
                placeholder="SEO Keywords (comma separated)"
                className="p-4 border focus:outline-none rounded-lg mt-1 w-full"
                value={productSEOKeywords}
                onChange={(e) => setProductSEOKeywords(e.target.value)}
              />
            </div>

            {/* To this line */}
          </div>
          <div className="text-center">
            <button className="bg-amber-800 mt-8 text-white py-2 px-6 rounded-lg hover:bg-amber-600 transition-all duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
