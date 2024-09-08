import React from "react";
import { FaTiktok,FaInstagram,FaFacebook, FaT } from "react-icons/fa6";

const Footer = () => {
  return (
  <footer>
    <div class="container-footer">
        <div class="footer-logo"><a href="/">Book.</a></div>

        <nav class="social-links">
            <h3>Get In Touch</h3>
            <p>the quick fox jumps over the lazy dog</p>
            <ul>
                <li><a href="#"><FaInstagram /></a></li>
                <li><a href="#"><FaFacebook /></a></li>
                <li><a href="#"><FaTiktok /></a></li>
            </ul>
        </nav>
        <nav class="conditions">
            <h3>Conditions</h3>
            <ul>
                <li><a href="#">Mention Legal</a></li>
                <li><a href="#">Condition général d’utilisation</a></li>
                <li><a href="#">Condition général de vente</a></li>
                <li><a href="#">politique des cookies</a></li>
            </ul>
        </nav>
        <nav class="informaion">
            <h3>Informations</h3>
            <ul>
                <li><a href="#">A propos de nous</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
    <div class="copyright">
        <p>&copy;Made with love by <a href="https://numidian.dev">numidian.dev</a> All Right
            Reserved</p>
    </div>
</footer>
);
};

export default Footer