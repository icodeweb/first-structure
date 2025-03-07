function Mylist() {
    let testList = ["one", "two", "three", "one", "two", "three"]

    return (
        <ul>
            {testList.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

export default Mylist


