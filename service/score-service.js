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

  async getScoreByUser(userId) {
    const score = await Score.findOne({ where: { user: userId } });
    return score;
  }

  async updateScoreByUser(userId, score) {
    const updatedScore = await Score.update(score, { where: { user: userId } });
    return updatedScore;
  }

  async removeScoreByUser(userId) {
    const score = await Score.destroy({ where: { user: userId } });
    return score;
  }

  async removeScoreById(id) {
    const score = await Score.destroy({ where: { id } });
    return score;
  }
}

module.exports = new ScoreService();
