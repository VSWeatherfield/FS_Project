import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="d-footer">
      <div className='wrap'>
        <div className='flexbox'>
          <div className='first-box'>
            <div class="heading">
              «Wonder Pets!»
            </div>
            <div className="blurb">
              Сайт, созданный обычным студентом в качестве универститеского задания
            </div>
          </div>
          <div class="second-box">
          <div class="links">
            <div class="list">
              <span class="другие-проекты">
                Другие проекты
              </span>
              <ul>
                <li class="footer-section-link-wrapper результаты-прошлых-олимпиад">
                  <a class="footer-section-link" title="откроется в новом окне" href="http://matol.kz/" target="_blank">
                    Результаты прошлых <br></br> олимпиад
                  </a>
                </li>
                <li class="footer-section-link-wrapper научпоп-статьи">
                  <a class="footer-section-link" title="откроется в новом окне" href="https://blog.bc-pf.org/" target="_blank">
                    Научпоп статьи
                  </a>
                </li>
              </ul>
            </div>
            <div class="list">
              <span class="полезные-ресурсы">
                Полезные ресурсы
              </span>

              <ul>
                <li class="footer-section-link-wrapper qazcho">
                  <a class="footer-section-link" title="откроется в новом окне" href="https://artofproblemsolving.com/community/c13_contests" target="_blank">
                    AoPS
                  </a>
                </li>
                <li class="footer-section-link-wrapper codeforces">
                  <a class="footer-section-link" title="откроется в новом окне" href="https://codeforces.com" target="_blank">
                    Codeforces
                  </a>
                </li>
                <li class="footer-section-link-wrapper qazcho">
                  <a class="footer-section-link" title="откроется в новом окне" href="http://matol.kz/" target="_blank">
                    Matol
                  </a>
                </li>
                <li class="footer-section-link-wrapper qazcho">
                  <a class="footer-section-link" title="откроется в новом окне" href="http://mathforces.com/" target="_blank">
                    MathForces
                  </a>
                </li>
              </ul>
            </div>
            <div class="list">
              <span class="о-фонде">
                Связаться с автором
              </span>
              <ul>
                <li class="footer-section-link-wrapper о-нас">
                  <a class="footer-section-link" title="откроется в новом окне" href="https://t.me/vsweatherfield" target="_blank">
                    Telegram
                  </a>
                </li>
                <li class="footer-section-link-wrapper дипломы">
                  <a class="footer-section-link" title="откроется в новом окне" href="https://vk.com/cappuccinos_burritos" target="_blank">
                    VK 
                  </a>
                </li>
                <li class="footer-section-link-wrapper дипломы">
                  <a class="footer-section-link" title="откроется в новом окне" href="https://github.com/VSWeatherfield" target="_blank">
                    Github
                  </a>
                </li>
                <li class="footer-section-link-wrapper дипломы">
                  <a class="footer-section-link" title="откроется в новом окне" href="https://vk.com/cappuccinos_burritos" target="_blank">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="third-box">
          {/*}
          <div class="footer-links">
              <a class="small-link политика-работы-с-персональными-данными" target="_blank" href="https://bc-pf.org/personaldata">
                Политика работы с персональными данными
              </a>
          </div>

          <div class="social">
              <a class="social-link telegram" title="Наш канал" target="_blank" href="https://t.me/bcedukz">
                <svg class="fa d-icon d-icon-fab-telegram svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use href="#fab-telegram"></use></svg>
              </a>
              <a class="social-link youtube" title="Check out our latest videos on Youtube" target="_blank" href="https://www.youtube.com/c/BeyondCurriculum">
                <svg class="fa d-icon d-icon-fab-youtube svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use href="#fab-youtube"></use></svg>
              </a>
              <a class="social-link github" title="Наши репозитории" target="_blank" href="https://github.com/Beyond-Curriculum">
                <svg class="fa d-icon d-icon-fab-github svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use href="#fab-github"></use></svg>
              </a>
              <a class="social-link instagram" title="Наш аккаунт" target="_blank" href="https://www.instagram.com/beyondcurriculum/">
                <svg class="fa d-icon d-icon-fab-instagram svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use href="#fab-instagram"></use></svg>
              </a>
              <a class="social-link facebook" title="Join us on Facebook" target="_blank" href="https://www.facebook.com/bcedukz">
                <svg class="fa d-icon d-icon-fab-facebook svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use href="#fab-facebook"></use></svg>
              </a>
              <a class="social-link vk" title="Наша группа" target="_blank" href="https://vk.com/beyondcurriculum">
                <svg class="fa d-icon d-icon-fab-vk svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use href="#fab-vk"></use></svg>
              </a>
              <a class="social-link linkedin" title="Наша организация" target="_blank" href="https://www.linkedin.com/company/beyondcurriculum/">
                <svg class="fa d-icon d-icon-fab-linkedin svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use href="#fab-linkedin"></use></svg>
              </a>
          </div>
          */}
        </div>  
      </div>
    </div>
  </footer>
  )
}

export default Footer;