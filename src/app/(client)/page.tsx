import Container from "@/app/components/Container";
import HeroSlider from "@/app/components/HeroSlider";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <HeroSlider/>
            <section id="home" className="p-24 text-center mt-24">
                <h2 className="text-5xl font-bold brutal-shadow inline-block p-4">
                    We Build Bold Websites
                </h2>
                <p className="mt-4 text-xl">
                    High-performance, aesthetic, and brutally modern.
                </p>
                <a
                    href="#contact"
                    className="mt-6 inline-block bg-yellow-500 text-black text-xl px-6 py-3 brutal-shadow btn hover:bg-white"
                >
                    Get Started Now
                </a>
            </section>

            {/* Services */}
            <section id="services" className="grid grid-cols-1 md:grid-cols-3 gap-6 p-12">
                <div className="p-6 border-4 border-white brutal-shadow">
                    <h3 className="text-3xl font-bold">🚀 Fast Performance</h3>
                    <p className="mt-2">Optimized for speed and efficiency.</p>
                </div>
                <div className="p-6 border-4 border-white brutal-shadow">
                    <h3 className="text-3xl font-bold">🎨 Unique Design</h3>
                    <p className="mt-2">Eye-catching layouts with brutalist aesthetics.</p>
                </div>
                <div className="p-6 border-4 border-white brutal-shadow">
                    <h3 className="text-3xl font-bold">🔒 Secure & Scalable</h3>
                    <p className="mt-2">Built with the latest security standards.</p>
                </div>
            </section>

            {/* Process */}
            <section id="process" className="p-12 text-center">
                <h2 className="text-4xl font-bold">Our Process</h2>
                <p className="mt-4 text-xl">
                    We take your ideas and turn them into reality through a seamless development process.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-12">
                    <div className="p-6 border-4 border-white brutal-shadow">
                        <h3 className="text-3xl font-bold">🔍 Discovery</h3>
                        <p className="mt-2">Understanding your vision and goals.</p>
                    </div>
                    <div className="p-6 border-4 border-white brutal-shadow">
                        <h3 className="text-3xl font-bold">⚙️ Development</h3>
                        <p className="mt-2">Building fast, secure, and scalable websites.</p>
                    </div>
                    <div className="p-6 border-4 border-white brutal-shadow">
                        <h3 className="text-3xl font-bold">🚀 Launch</h3>
                        <p className="mt-2">Deploying and optimizing for success.</p>
                    </div>
                </div>
                <a
                    href="#contact"
                    className="mt-6 inline-block bg-blue-500 text-black text-xl px-6 py-3 brutal-shadow btn hover:bg-white"
                >
                    Start Your Project Today
                </a>
            </section>

            {/* Contact */}
            <section id="contact" className="p-12 text-center">
                <h2 className="text-4xl font-bold">Get in Touch</h2>
                <p className="mt-2">Let's build something awesome together.</p>
                <div className="form-container max-w-md mx-auto mt-6">
                    <form action="https://fabform.io/f/FORM_ID" method="POST">
                        <input type="hidden" name="form" value="YOUR_FORM_IDENTIFIER"/>

                        <label className="block text-lg font-bold mb-2">Name</label>
                        <input type="text" name="name" placeholder="Your Name" className="mb-4" required/>

                        <label className="block text-lg font-bold mb-2">Email</label>
                        <input type="email" name="email" placeholder="Your Email" className="mb-4" required/>

                        <label className="block text-lg font-bold mb-2">Message</label>
                        <textarea name="message" rows={4} placeholder="Your Message" className="mb-4" required/>

                        <button
                            type="submit"
                            className="mt-4 inline-block bg-red-500 text-black text-xl px-6 py-3 brutal-shadow btn hover:bg-white"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}