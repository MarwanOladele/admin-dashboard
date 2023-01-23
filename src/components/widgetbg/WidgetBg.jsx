import "./WidgetBg.css";
import img from "../../assets/image1.png";

const Button = ({ type }) => (
  <button className={`widgetbg_button_${type}`}>{type}</button>
);

const WidgetBg = () => {
  return (
    <div className="widgetbg">
      <h3 className="widgetbg_title"> Latest Transactions</h3>
      <table className="widgetbg_table">
        <tr className="widgetbg_tr">
          <th className="widgetbg_th">Customer</th>
          <th className="widgetbg_th">Date</th>
          <th className="widgetbg_th">Amount</th>
          <th className="widgetbg_th">Status</th>
        </tr>

        <tr className="widgetbg_tr">
          <td className="widgetbg_td">
            <img src={img} alt="img" className="widgetbg_img" />
            <span className="widgetbg_name">Marwan Oladele</span>
          </td>
          <td className="widgetbg_date">2 Jun 2021</td>
          <td className="widgetbg_amount">$122.00</td>
          <td className="widgetbg_status">
            <Button type='Approved'/>
          </td>
        </tr>

        <tr className="widgetbg_tr">
          <td className="widgetbg_td">
            <img src={img} alt="img" className="widgetbg_img" />
            <span className="widgetbg_name">Marwan Oladele</span>
          </td>
          <td className="widgetbg_date">2 Jun 2021</td>
          <td className="widgetbg_amount">$122.00</td>
          <td className="widgetbg_status">
            <Button type='Declined'/>
          </td>
        </tr>

        <tr className="widgetbg_tr">
          <td className="widgetbg_td">
            <img src={img} alt="img" className="widgetbg_img" />
            <span className="widgetbg_name">Marwan Oladele</span>
          </td>
          <td className="widgetbg_date">2 Jun 2021</td>
          <td className="widgetbg_amount">$122.00</td>
          <td className="widgetbg_status">
            <Button type='Pending'/>
          </td>
        </tr>

        <tr className="widgetbg_tr">
          <td className="widgetbg_td">
            <img src={img} alt="img" className="widgetbg_img" />
            <span className="widgetbg_name">Marwan Oladele</span>
          </td>
          <td className="widgetbg_date">2 Jun 2021</td>
          <td className="widgetbg_amount">$122.00</td>
          <td className="widgetbg_status">
            <Button type='Approved'/>
          </td>
        </tr>

      </table>
    </div>
  );
};

export default WidgetBg;
