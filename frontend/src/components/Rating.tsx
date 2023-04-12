function Rating(props: {
    rating: number
    numReviews?: number
    caption?: string
}) {
    const { rating, numReviews, caption } = props
    return <div className="rating"></div>
}

export default Rating