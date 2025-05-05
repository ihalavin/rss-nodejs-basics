const parseArgs = () => {
    let args = [];
    for (let i = 0; i < process.argv.length; i++) {
        const arg = process.argv[i];
        if (arg.startsWith('--')) {
            args.push(arg + ' is ' + process.argv[i + 1]);
        }
    }

    console.log(args.join(', '));
};

parseArgs();
