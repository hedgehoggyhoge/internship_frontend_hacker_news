import React from "react"
import ContentLoader from "react-content-loader"

const Listing = () => (
    <ContentLoader
        speed={2}
        width={500}
        length={1000}
        height={160}
        margin={500}
        padding={300}
        viewBox="0 0 400 160"
        backgroundColor="#315bd8"
        foregroundColor="#3785a0"
    >
        <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
        <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
        <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
        <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
        <circle cx="20" cy="20" r="20" />
    </ContentLoader>
)

export default Listing
