import Lightings from "./Lightings";
import "./footerSection.scss";

const FooterSection = () => (
	<section className="footerSection" id="homepage-footer">
		<p>© {new Date().getFullYear()} YOUR_NAME. All rights reserved.</p>
		<Lightings />
	</section>
);

export default FooterSection;
