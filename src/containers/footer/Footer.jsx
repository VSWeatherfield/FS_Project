import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="d-footer">
      <div className="wrap">
        <div className="flexbox">
          <div className="first-box">
            <div className="heading">«Wonder Pets!»</div>
            <div className="blurb">
              Сайт, созданный обычным студентом в качестве универститеского
              задания
            </div>
          </div>
          <div className="second-box">
            <div className="links">
              <div className="list">
                <span className="другие-проекты">Другие проекты</span>
                <ul>
                  <li className="footer-section-link-wrapper результаты-прошлых-олимпиад">
                    <a
                      className="footer-section-link"
                      title="откроется в новом окне"
                      href="http://matol.kz/"
                      target="_blank"
                    >
                      Результаты прошлых <br></br> олимпиад
                    </a>
                  </li>
                  <li className="footer-section-link-wrapper научпоп-статьи">
                    <a
                      className="footer-section-link"
                      title="откроется в новом окне"
                      href="https://blog.bc-pf.org/"
                      target="_blank"
                    >
                      Научпоп статьи
                    </a>
                  </li>
                </ul>
              </div>
              <div className="list">
                <span className="полезные-ресурсы">Полезные ресурсы</span>

                <ul>
                  <li className="footer-section-link-wrapper qazcho">
                    <a
                      className="footer-section-link"
                      title="откроется в новом окне"
                      href="https://artofproblemsolving.com/community/c13_contests"
                      target="_blank"
                    >
                      AoPS
                    </a>
                  </li>
                  <li className="footer-section-link-wrapper codeforces">
                    <a
                      className="footer-section-link"
                      title="откроется в новом окне"
                      href="https://codeforces.com"
                      target="_blank"
                    >
                      Codeforces
                    </a>
                  </li>
                  <li className="footer-section-link-wrapper qazcho">
                    <a
                      className="footer-section-link"
                      title="откроется в новом окне"
                      href="http://matol.kz/"
                      target="_blank"
                    >
                      Matol
                    </a>
                  </li>
                  <li className="footer-section-link-wrapper qazcho">
                    <a
                      className="footer-section-link"
                      title="откроется в новом окне"
                      href="http://mathforces.com/"
                      target="_blank"
                    >
                      MathForces
                    </a>
                  </li>
                </ul>
              </div>
              <div className="list">
                <span className="о-фонде">Связаться с автором</span>
                <ul>
                  <li className="footer-section-link-wrapper о-нас">
                    <a
                      className="footer-section-link"
                      title="откроется в новом окне"
                      href="https://t.me/vsweatherfield"
                      target="_blank"
                    >
                      Telegram
                    </a>
                  </li>
                  <li className="footer-section-link-wrapper дипломы">
                    <a
                      className="footer-section-link"
                      title="откроется в новом окне"
                      href="https://vk.com/cappuccinos_burritos"
                      target="_blank"
                    >
                      VK
                    </a>
                  </li>
                  <li className="footer-section-link-wrapper дипломы">
                    <a
                      className="footer-section-link"
                      title="откроется в новом окне"
                      href="https://github.com/VSWeatherfield"
                      target="_blank"
                    >
                      Github
                    </a>
                  </li>
                  <li className="footer-section-link-wrapper дипломы">
                    <a
                      className="footer-section-link"
                      title="откроется в новом окне"
                      href="https://vk.com/cappuccinos_burritos"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="third-box">
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
