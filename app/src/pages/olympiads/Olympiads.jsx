import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { UseOlymps } from "../../hooks";
import { BoxForm } from "../../components";

import "./olympiads.css";

export function Olympiads() {
  const olympiads = useSelector((state) => state.olymps.olympNames);
  UseOlymps();

  return (
    <div className="outerOlympElem">
      <Link to="/">
        <a className="flex w-min items-center text-blue-500 text-sm mb-6">
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H6M12 5l-7 7 7 7"></path>
          </svg>
          <span>Назад</span>
        </a>
      </Link>
      <div className="olympHeader">
        <div>
          <h1 className="olympRealHeader"> Задачи олимпиад прошлых лет</h1>
          <p className="olympUnderHeader">
            Здесь вы можете найти задания и решения различных олимпиад
          </p>
        </div>
      </div>
      <div>
        <h2 className="olymTextDelim">Олимпиады</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        {olympiads.map((olympiad) => (
          <BoxForm key={olympiad} id={olympiad} name={olympiad.name} />
        ))}
      </div>
    </div>
  );
}

export default Olympiads;
