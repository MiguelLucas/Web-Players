import chalk from 'chalk'
import logger from 'loglevel'
import prefix from 'loglevel-plugin-prefix'

const colors = {
  TRACE: chalk.magenta,
  DEBUG: chalk.cyan,
  INFO: chalk.blue,
  WARN: chalk.yellow,
  ERROR: chalk.red,
};

prefix.reg(logger);
logger.enableAll();

prefix.apply(logger, {
  format(level, name, timestamp) {
    //return `${chalk.gray(`[${timestamp}]`)} ${colors[level.toUpperCase()](level)} ${chalk.green(`${name}:`)}`;
    return `${colors[level.toUpperCase()](`[${timestamp}] ${level}:`)}`;
  },
});

prefix.apply(logger.getLogger('critical'), {
  format(level, name, timestamp) {
    return chalk.red.bold(`[${timestamp}] ${level} ${name}:`);
  },
});

/*logger.trace('trace');
logger.debug('debug');
logger.getLogger('critical').info('Something significant happened');
logger.log('log');
logger.info('info');
logger.warn('warn');
logger.error('error');*/

export default logger;