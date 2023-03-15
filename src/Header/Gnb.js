import { Link } from "react-router-dom";
import "./GNB.css";

function Gnb() {
  const menuList = [
    { name: "Home", link: "/" },
    { name: "센터소개", link: "/about" },
    { name: "방문재가", link: "/" },
    { name: "복지용품", link: "/" },
  ];
  return (
    <ul className="GNB">
      {menuList.map(({ name, comment, link }, index) => (
        <li key={index}>
          {/* <a>
            {name}
            {comment && <span>{comment}</span>}
          </a> */}
          <Link to={link}>
            {name}
            {comment && <span>{comment}</span>}
          </Link>
          {/* <Link to={`/${coinId}/candle`}>Candle</Link> */}
        </li>
      ))}
    </ul>
  );
}

export default Gnb;
