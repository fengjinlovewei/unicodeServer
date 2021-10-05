class UserContorller {
  async register(ctx, next) {
    ctx.body = '用户注册';
  }
}

module.exports = new UserContorller();
