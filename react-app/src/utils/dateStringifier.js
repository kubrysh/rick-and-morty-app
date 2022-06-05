const dateStringifier = (date) => {
    const dateObject = new Date(date);
    const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };

    return dateObject.toLocaleString("en-US", options);
};

export default dateStringifier;
