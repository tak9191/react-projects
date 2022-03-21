import React from 'react'

const Footer = () => {
    return (
        <footer id='footer'>
            <h3 className="title"><img src="./styles/images4/logo.svg" alt="Shortly" /></h3>
            
            <section className="footer-table">
                <div className="table-row">
                    <h4>features</h4>
                    <a href="#">link shortening</a>
                    <a href="#">branded links</a>
                    <a href="#">analytics</a>
                </div>
                <div className="table-row">
                    <h4>resources</h4>
                    <a href="#">blog</a>
                    <a href="#">developers</a>
                    <a href="#">support</a>
                </div>
                <div className="table-row">
                    <h4>company</h4>
                    <a href="#">about</a>
                    <a href="#">our team</a>
                    <a href="#">careers</a>
                    <a href="#">contact</a>
                </div>
            </section>

            {/* <table>
                <tr>
                    <th>features</th>
                    <th>resources</th>
                    <th>company</th>
                </tr>
                <tr>
                    <td><a href="#">link shortening</a></td>
                    <td><a href="#">blog</a></td>
                    <td><a href="#">about</a></td>
                </tr>
                <tr>
                    <td><a href="#">branded links</a></td>
                    <td><a href="#">developers</a></td>
                    <td><a href="#">our team</a></td>
                </tr>
                <tr>
                    <td><a href="#">analytics</a></td>
                    <td><a href="#">support</a></td>
                    <td><a href="#">careers</a></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td><a href="#">contact</a></td>
                </tr>
            </table> */}

            <section className="social-icons">
                <a href="#">
                    <img src="./styles/images4/icon-facebook.svg" alt="facebook" />
                </a>
                <a href="#">
                    <img src="./styles/images4/icon-twitter.svg" alt="facebook" />
                </a>
                <a href="#">
                    <img src="./styles/images4/icon-pinterest.svg" alt="facebook" />
                </a>
                <a href="#">
                    <img src="./styles/images4/icon-instagram.svg" alt="facebook" />
                </a>
                
            </section>

        </footer>
    )
}

export default Footer
