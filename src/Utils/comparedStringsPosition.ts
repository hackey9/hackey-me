export default function comparedStringsPosition(target: string, current: string): number {

    for (let i = 0; i < target.length; i++) {
        if (current[i] !== target[i]) {
            return i;
        }
    }

    return current.length;
}
