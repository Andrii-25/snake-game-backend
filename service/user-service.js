const { User } = require("../models");
const bcrypt = require("bcrypt");
const tokenService = require("./token-service");
const scoreService = require("./score-service");
const UserDto = require("../dto/user-dto");
const ApiError = require("../exceptions/api-error");

class UserService {
  async registration(username, password) {
    const candidate = await User.findOne({ username });
    if (candidate) {
      throw ApiError.BadRequest(`There is no user with name ${username}!`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const user = await User.create({
      username,
      password: hashPassword,
    });
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    await scoreService.createNewScore({ score: 0, user: userDto.id });

    return {
      ...tokens,
      user: userDto,
    };
  }

  async login(username, password) {
    const user = await User.findOne({ username });
    if (!user) {
      throw ApiError.BadRequest(`There is no user with name ${username}!`);
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest("Wrong password!");
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    // const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData) {
      throw ApiError.UnauthorizedError();
    }
    const user = await User.findOne({ id: userData.id });
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async getAllUsers() {
    const users = await User.findAll();
    return users;
  }
}

module.exports = new UserService();
