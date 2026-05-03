function canSendAlert(lastAlert, nextRecommendation, cooldownMs) {
  if (!lastAlert) return true;
  if (lastAlert.fingerprint === nextRecommendation.fingerprint) return false;
  const elapsed = Date.now() - new Date(lastAlert.sent_at).getTime();
  return elapsed >= cooldownMs;
}

module.exports = { canSendAlert };
