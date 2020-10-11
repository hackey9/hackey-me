export default async function dummyLoading(ms: number) : Promise<void> {

    return new Promise(resolve => {
        setInterval(resolve, ms)
    });
}

