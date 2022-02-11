const scoreService = require("../service/score-service");

class ScoreController {
  async createNew(req, res, next) {
    try {
      const { score } = req.body;
      const savedScore = await scoreService.createNewScore(score);
      return res.json(savedScore);
    } catch (e) {
      next(e);
    }
  }

  async getAll(req, res, next) {
    try {
      const scores = await scoreService.getAllScores();
      return res.json(scores);
    } catch (e) {
      next(e);
    }
  }

  async getByUser(req, res, next) {
    try {
      const { userId } = req.params;
      const score = await scoreService.getScoreByUser(userId);
      return res.json(score);
    } catch (e) {
      next(e);
    }
  }

  async updateByUser(req, res, next) {
    try {
      const { userId } = req.params;
      const { score } = req.body;
      const updatedScore = await scoreService.updateScoreByUser(userId, score);
      return res.json(updatedScore);
    } catch (e) {
      next(e);
    }
  }

  async removeByUser(req, res, next) {
    try {
      const { user } = req.body;
      const removedScore = await scoreService.removeScoreByUser(user);
      return res.json(removedScore);
    } catch (e) {
      next(e);
    }
  }

  async removeById(req, res, next) {
    try {
      const { id } = req.body;
      const removedScore = await scoreService.removeScoreById(id);
      return res.json(removedScore);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ScoreController();
