/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    } else if (numbers.length == 1) {
        return [numbers[0], numbers[0]];
    }

    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    numbers = numbers.map(function (x) {
        return x * 3;
    });

    return numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const value = numbers.map((words: string): number =>
        !Number.isNaN(parseInt(words)) ? parseInt(words) : 0
    );

    return value;
}

/**
 *
 *
 *
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const hasSign = amounts.map((values: string): string =>
        values.charAt(0) == "$" ? values.slice(1) : values
    );
    const result = hasSign.map((words: string): number =>
        !Number.isNaN(parseInt(words)) ? parseInt(words) : 0
    );
    return result;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const fixedList = messages.filter((values: string): boolean =>
        values.charAt(values.length - 1) != "?" ? true : false
    );

    const shouting = fixedList.map((values: string): string =>
        values.charAt(values.length - 1) == "!" ? values.toUpperCase() : values
    );
    return shouting;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const bigOrSmall = words.map((values: string): number =>
        values.length < 4 ? 1 : 0
    );

    const totalSmall = bigOrSmall.reduce(
        (Total: number, value: number) => Total + value,
        0
    );

    return totalSmall;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) {
        return true;
    }

    const isRBG = colors.map((values: string): boolean =>
        values === "blue" || values === "red" || values === "green"
            ? true
            : false
    );

    const testing = isRBG.every((values: boolean): boolean =>
        values ? true : false
    );

    return testing;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) {
        addends = [0];
    }
    const words: string =
        addends.reduce((total: number, num: number) => total + num, 0) +
        "=" +
        addends.toString().replaceAll(",", "+");

    return words;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const neg = values.map((val: number): boolean => (val < 0 ? true : false));
    let negIDX = -5;
    negIDX = neg.indexOf(true);
    const newList = [...values];

    if (negIDX == -1) {
        const bonus = values.reduce(
            (Total: number, sum: number) => Total + sum,
            0
        );
        newList.push(bonus);
        return newList;
    } else {
        const extra = values.slice(negIDX + 1);
        const other = values.slice(0, negIDX + 1);
        let add = other.reduce((Total: number, sum: number) => Total + sum, 0);
        add -= values[negIDX];

        other.push(add);
        const finalValue = other.concat(extra);
        return finalValue;
    }
    return [];
}
