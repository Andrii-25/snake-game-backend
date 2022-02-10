const { Score } = require("../models");

class ScoreService {
  async createNewScore(score) {
    const createdScore = await Score.create(score);
    return createdScore;
  }

  async getAllScores() {
    const scores = await Score.findAll();
    return scores;
  }

  async getScoreByUser(user) {
    const score = await Score.findOne({ where: { user } });
    return score;
  }

  async updateScoreByUser(user, score) {
    const updatedScore = await Score.update({ score }, { where: { user } });
    return updatedScore;
  }

  async removeScoreByUser(user) {
    const score = await Score.destroy({ where: { user } });
    return score;
  }

  async removeScoreById(id) {
    const score = await Score.destroy({ where: { id } });
    return score;
  }
}

module.exports = new ScoreService();
