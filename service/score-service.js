const { Score } = require("../models");

class ScoreService {
  async createNewScore(score) {
    const score = await Score.create(score);
    return score;
  }

  async getAllScores() {
    const scores = await Score.findAll();
    return scores;
  }

  async getScoreByUser(user) {
    const score = await Score.findOne({ user });
    return score;
  }

  async updateScoreByUser(user, score) {
    const score = await Score.update({ score }, { where: { user } });
    return score;
  }

  async removeScoreByUser(user) {
    const score = await Score.destroy({ user });
    return score;
  }

  async removeScoreById(id) {
    const score = await Score.destroy({ id });
    return score;
  }
}

module.exports = new ScoreService();
