const parseEnv = () => {
    let rssKeys = [];

    for (const key in process.env) {
        if (key.startsWith('RSS_')) {
            rssKeys.push(`${key}=${process.env[key]}`);
        }
    }

    console.log(rssKeys.join('; '));
};

parseEnv();
