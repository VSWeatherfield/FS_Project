import React from "react";
import "./scoreboard.css";

const Scoreboard = () => {
  return (
    <div className="home::before home">
      <div className=" mx-auto hero">
        <div className="max-w-lg">
          <h1 className="text-header-class  md:text-4xl mb-8">О проекте</h1>
          <div className="just-text-class text-base md:text-lg text-black dark:text-white">
            <p className="mb-4">
              Залог любого процветающего государства — образование и наука. К
              сожалению, настоящее поколение перестало равняться на ровесников
              олимпиадников, ученых, инженеров и учителей, которые вносят вклад
              в развитие мира.
            </p>
            <p className="mb-4">
              Тем не менее, в Казахстане немало школьников, которые не только
              хорошо учатся, но и выходят за рамки школьной программы и
              участвуют в олимпиадах и конкурсах, создают научные проекты и
              занимаются исследованиями, благодаря чему достигают высот в своей
              жизни.
            </p>
            <p>
              Этим проектом мы чествуем таких ребят и предлагаем новых кумиров
              для молодежи.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
