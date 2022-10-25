//fix footer
const Footer = () => {
	return (
		<footer className="text-center p-3">
			<p className="text-green-400 text-xl ">
				{'Copyright © '}Collector {new Date().getFullYear()}
				{'.'}
			</p>
		</footer>
	);
};

export default Footer;
