// TODO - put carousel instead of just bg image for the first section

import Image from "next/image";

export default function LandingContent() {
    return (
        <main>
            <div id="a" style={{ height: `calc(100vh)` }}>
                <Image fill src="https://littlevisuals.co/images/747.jpg" />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <p className="text-center text-7xl">SafeCommunity</p>
                    <p className="text-center text-3xl">An affordable solution to ensure the safety of your online community.</p>
                </div>
            </div>

            <div id="about" className="h-72">
                <p>About Us</p>
            </div>

            <div id="plans">

            </div>

            <div id="api">

            </div>
        </main>
    );
}