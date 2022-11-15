import React from "react"
import ContentLoader from "react-content-loader"

const Listing = () => (
    <ContentLoader
        speed={1}
        width={1200}
        height={90}
        viewBox="0 0 900 90"
        backgroundColor="#f6f16a"
        foregroundColor="#ecebeb"
    >
        <rect x="7" y="10" rx="19" ry="19" width="750" height="82" />
    </ContentLoader>
)

export default Listing
