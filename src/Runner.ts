import CommandProcessor from './CommandProcessor';

if (require.main === module) {
    const filePath = process.argv[2];
    if (!filePath) {
        console.error('Please provide a file path as a command line argument.');
        process.exit(1);
    }

    const commandProcessor = new CommandProcessor();
    commandProcessor.readCommands(filePath);
}