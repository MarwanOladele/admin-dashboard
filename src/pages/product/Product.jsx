import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import "./Product.css";
import { productData } from "../../data";
import img from "../../assets/image2.png";
import PublishIcon from "@mui/icons-material/Publish";

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart title="Sales Performance" data={productData} dataKey="Sales" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={img} alt="img" className="productInfoimg" />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoButtom">
            <div className="productInfoItem">
              <span className="productInfokey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfokey">sales:</span>
              <span className="productInfoValue">4123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfokey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfokey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productButtom">
        <form action="" className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpods" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={img} alt="img" />
              <label for="file">
                <PublishIcon style={{ cursor: "pointer" }} />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
