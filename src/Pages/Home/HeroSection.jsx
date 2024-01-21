export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Mya Dang</span>{" "}
                    </h1>
                    <br />
                    <p className="hero--section-description">
                        A sophomore at Villanova University with a Computer Science major and a Business minor.
                    </p>
                </div>
                <br />
                <a href="https://www.linkedin.com/in/mya-dang"><button className="btn btn-primary">My LinkedIn</button></a>
            </div>
            <div className="hero--section--img">
                <img src="./img/profilepic.png" alt="Hero Section" />
            </div>
        </section>
    );
}