import { Link } from "react-router-dom";
import "./GNB.css";

function Gnb() {
  const menuList = [
    { name: "Home", link: "/" },
    { name: "센터소개", link: "/introduce" },
    { name: "방문재가", link: "/center" },
    // { name: "복지용품", link: "/goods" },
  ];
  return (
    <ul className="GNB">
      {menuList.map(({ name, comment, link }, index) => (
        <li key={index}>
          <Link to={link}>
            {name}
            {comment && <span>{comment}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Gnb;
