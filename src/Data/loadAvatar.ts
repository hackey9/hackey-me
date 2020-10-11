export default async function loadAvatar(): Promise<string>
{
    const url = "/static/images/ava.png";

    const response = await fetch(url);
    const data = await response.blob();

    return URL.createObjectURL(data);
};
