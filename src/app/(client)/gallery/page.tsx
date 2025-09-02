import React from 'react'
import Container from "@/app/components/Container";
import ComingSoonPage from "@/app/components/widget/CComingSoon";

export default function Page() {
    return (
        <Container className="flex flex-col max-w-7xl mx-auto p-4">
            <ComingSoonPage/>
        </Container>
    )
}