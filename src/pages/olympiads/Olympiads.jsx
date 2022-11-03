import { BoxForm } from "../../components";

import "./olympiads.css";

export function Olympiads() {
  return (
    <div className="outerOlympElem">
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

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
      <BoxForm olympName="ГЖО" olympId="gzho" />
      <BoxForm olympName="Республиканская" olympId="respa" />
      <BoxForm olympName="IMO" olympId="imo" />
      <BoxForm olympName="Туймаада" olympId="tyimada" />
      <BoxForm olympName="Азиатско-Тихоокеанская" olympId="apmo" />
      <BoxForm olympName="Балканская" olympId="bmo" />
      <BoxForm olympName="EGMO" olympId="egmo" />
      </div>
    </div>
  );
}

export default Olympiads;
