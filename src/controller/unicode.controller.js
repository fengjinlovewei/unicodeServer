const fontList = require('font-list');

class UnicodeContorller {
  async font(ctx, next) {
    try {
      const data = await fontList.getFonts({ disableQuoting: true });
      ctx.body = {
        code: 0,
        data,
      };
    } catch (e) {
      ctx.body = {
        code: 400,
        data: null,
      };
    }
  }
}

module.exports = new UnicodeContorller();
