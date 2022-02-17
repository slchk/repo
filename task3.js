function getNumber(min, max, length, sum) {
    return Array.from(
        { length },
        (_, i) => {
            let smin = (length - i - 1) * min,
                smax = (length - i - 1) * max,
                offset = Math.max(sum - smax, min),
                random = Math.min(sum - offset, max - offset, sum - smin - min),
                value = Math.floor(Math.random() * random + offset);

            sum -= value; // sum = sum - value
            return value;
        }
    );
}

console.log(Array.from({ length: 10 }, _ => getNumber(0, 10, 3, 10).join(' ')));