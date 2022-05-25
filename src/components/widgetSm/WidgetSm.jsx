import "./widgetSm.css";
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetLg() {
  return (
    <div className="widgetSm">
    <span className="widgetSmTitle">New Join Members</span>
    <ul className="widgetSmList">
      <li className="widgetSmListItem">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
          alt=""
          className="widgetSmImg"
        />
        <div className="widgetSmUser">
          <span className="widgetSmUsername">John Doe</span>
          <span className="widgetSmUserTitle">Accoutant</span>
        </div>
        <button className="widgetSmButton">
          <VisibilityIcon className="widgetSmIcon" />
          Display
        </button>
      </li>
      <li className="widgetSmListItem">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
          alt=""
          className="widgetSmImg"
        />
        <div className="widgetSmUser">
          <span className="widgetSmUsername">John Doe</span>
          <span className="widgetSmUserTitle">Accoutant</span>
        </div>
        <button className="widgetSmButton">
          <VisibilityIcon className="widgetSmIcon" />
          Display
        </button>
      </li>
      <li className="widgetSmListItem">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
          alt=""
          className="widgetSmImg"
        />
        <div className="widgetSmUser">
          <span className="widgetSmUsername">John Doe</span>
          <span className="widgetSmUserTitle">Accoutant</span>
        </div>
        <button className="widgetSmButton">
          <VisibilityIcon className="widgetSmIcon" />
          Display
        </button>
      </li>
      <li className="widgetSmListItem">
        <img
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg"
          alt=""
          className="widgetSmImg"
        />
        <div className="widgetSmUser">
          <span className="widgetSmUsername">John Doe</span>
          <span className="widgetSmUserTitle">Accoutant</span>
        </div>
        <button className="widgetSmButton">
          <VisibilityIcon className="widgetSmIcon" />
          Display
        </button>
      </li>
      <li className="widgetSmListItem">
        <img
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg"
          alt=""
          className="widgetSmImg"
        />
        <div className="widgetSmUser">
          <span className="widgetSmUsername">John Doe</span>
          <span className="widgetSmUserTitle">Accoutant</span>
        </div>
        <button className="widgetSmButton">
          <VisibilityIcon className="widgetSmIcon" />
          Display
        </button>
      </li>
    </ul>
  </div>
  );
}
