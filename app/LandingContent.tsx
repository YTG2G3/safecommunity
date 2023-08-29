// TODO - put carousel instead of just bg image for the first section
// TODO - fix scroll margin

import Image from "next/image";
import Link from "next/link";

export default function LandingContent() {
    return (
        <main>
            <div style={{ height: `calc(100vh - 64px)`, paddingTop: 64 }}>
                <Image fill src="https://littlevisuals.co/images/747.jpg" alt="background" />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <p className="text-center text-7xl font-medium">SafeCommunity</p>
                    <p className="text-center text-3xl">An affordable solution to ensure the safety of your online community.</p>
                </div>
            </div>

            <div id="about" className="h-72">
                <p>About Us</p>
            </div>

            <div id="plans" className="h-72">
                <p>Plans</p>
            </div>

            <div id="api" className="h-72">
                <Link href="/api/docs">
                    <p>API docs</p>
                </Link>
            </div>
        </main>
    );
}