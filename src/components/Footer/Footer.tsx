
import './footer.css'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="upper-div">
        <div className="footer-menu-conainer">
          <span>Popular Locations</span>
          <ul>
            <li>Kolkatha</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>
        <div className="footer-menu-conainer">
          <span>Trending Locations</span>
          <ul>
            <li>Bhubaneshwar</li>
            <li>Hyderabad</li>
            <li>Chandigarh</li>
            <li>Nashik</li>
          </ul>
        </div>
        <div className="footer-menu-conainer">
          <span>About Us</span>
          <ul>
            <li>Tech@OLX</li>
          </ul>
        </div>
        <div className="footer-menu-conainer">
          <span>olx</span>
          <ul>
            <li>Blog</li>
            <li>Help</li>
            <li>Sitemap</li>
            <li>Legal & Privacy information</li>
            <li>Vulnerability Disclosure Program</li>
          </ul>
        </div>
        <div className="footer-menu-conainer">
          <span>follow us</span>
          <ul>

          </ul>
        </div>
      </div>
      <div className="lower-div">
        <ul>
          <li>
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade_tech.svg?v=1" alt="Car Trade"/>
          </li>
          <li>
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1" alt="olx"/>
          </li>
          <li>
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/carwale.svg?v=1" alt="carwale"/>
          </li>
          <li>
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/bikewale.svg?v=1" alt="bikewale"/>
          </li>
          <li>
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade.svg?v=1" alt="cartrade"/>
          </li>
          <li>
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/mobility.svg?v=1" alt="mobility_outlook"/>
          </li>
        </ul>
        <div className="copyright">
          <span>
            Help - Sitemap
          </span>
          <span>
            All rights reserved © 2006-2025 OLX
          </span>
        </div>
      </div>
    </div>
  )
}
