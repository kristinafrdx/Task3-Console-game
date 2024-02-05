import crypto from 'crypto';

class GetHmacComp {
  constructor(key) {
    this.key = key;
  }

  generateHmac(message) {
    const hmac = crypto.createHmac('sha3-256', this.key).update(message).digest('hex');
    return hmac;
  }
}

export default GetHmacComp;
