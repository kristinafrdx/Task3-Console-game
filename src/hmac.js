import crypto from 'crypto';

const getHmacComp = (computerMove, key) => {
  const hmac = crypto.createHmac('sha3-256', key).update(computerMove).digest('hex');
  return hmac;
};

export default getHmacComp;
