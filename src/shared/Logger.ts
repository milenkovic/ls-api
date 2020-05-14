import { createLogger, format, transports } from 'winston';

const { File, Console } = transports;

// Init Logger
const logger = createLogger({
    level: 'info',
});

if (process.env.NODE_ENV === 'production') {
    const errTransport = new File({
        filename: './logs/error.log',
        format: format.simple(),
        level: 'error',
    });
    logger.add(errTransport);

} else {
    const consoleTransport = new Console({
        format: format.simple()
    });
    logger.add(consoleTransport);
}

export default logger;