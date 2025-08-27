import type {Metadata} from "next";
import CNavbar from "@/app/components/widget/CNavbar";
import CFooter from "@/app/components/widget/CFooter";

export const metadata: Metadata = {
    title: {
        template: "%s | Enduro Tours Across Bali Indonesia by Bali Wilderness Dirt Bike and ExploRide Indonesia",
        default: "Bali Wilderness Dirt Bikes",
    },
    description: "Enduro Tours Across Bali Indonesia by Bali Wilderness Dirt Bike and ExploRide Indonesia",
};

export default async function RootLayout({children,}: {
    children: React.ReactNode;
}) {

    return (
        <>
            <CNavbar/>
            <main className="flex-1">{children}</main>
            <CFooter/>
        </>
    );
}
