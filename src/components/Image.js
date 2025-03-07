function Image({ src, alt }) {
    console.log(src);

    return (
        <img src={src} alt={alt} />
    )
}

export default Image