const Hero = () => {
    return <main className="hero">
        <div className="hero-content">
            <h1>YOUR FACE DESERVES THE BEST</h1>
            <p>We are here to help you with all the Face related Problems</p>

            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also availanle On</p>
                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    <img src="/images/flipkart.png" alt="flipkart-logo" />
                </div>
            </div>
        </div>
        <div className="hero-image">
            <img src="/images/charcoal.png" alt="charcoal-logo" />
        </div>
    </main>
};
export default Hero;