import "./widgetLg.css"
export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Donations</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Event</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?cs=srgb&dl=pexels-vinicius-wiesehofer-1130626.jpg&fm=jpg"
              alt=""
              className="widgetLgImg"
            />


        

            <span className="widgetLgName">Jane Doe</span>
          </td>
          <td className="widgetLgEvent">Yoga</td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$500.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?cs=srgb&dl=pexels-vinicius-wiesehofer-1130626.jpg&fm=jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Jane Doe</span>
          </td>
          <td className="widgetLgEvent">Yoga</td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$50.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?cs=srgb&dl=pexels-vinicius-wiesehofer-1130626.jpg&fm=jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Jane Doe</span>
          </td>
          <td className="widgetLgEvent">Yoga</td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$1000.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?cs=srgb&dl=pexels-vinicius-wiesehofer-1130626.jpg&fm=jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Jane Doe</span>
          </td>
          <td className="widgetLgEvent">Yoga</td>
          <td className="widgetLgDate">2 Jun 2021</td>
         
          <td className="widgetLgAmount">$1200.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}

