const urlApi = 'https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it';

const translate = async () => {
    try {
        const response = await fetch(urlApi);
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
    const data = await response.json();
    console.log(data);
    } catch (error) {
    console.error('Error fetching translation:', error);
    }
};

translate();
