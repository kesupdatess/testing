// ===== ATTENDANCE CALCULATOR =====
function calculateAttendance() {
  const total = parseFloat(document.getElementById('totalLectures').value);
  const attendedRaw = parseFloat(document.getElementById('attendedLectures').value);
  const required = parseFloat(document.getElementById('requiredPercent').value) || 75;
  const grace = parseFloat(document.getElementById('graceAttendance').value) || 0;
  const resultBox = document.getElementById('attendanceResult');
  const progressWrap = document.getElementById('attendanceProgressWrap');
  const progressFill = document.getElementById('attendanceProgressFill');
  const progressMarker = document.getElementById('attendanceProgressMarker');
  const currentLabel = document.getElementById('progressCurrentLabel');
  const requiredLabel = document.getElementById('progressRequiredLabel');
  const statBox = document.getElementById('attendanceStatBox');
  const statNumber = document.getElementById('attendanceStatNumber');
  const statLabel = document.getElementById('attendanceStatLabel');
  const quickStatCurrent = document.getElementById('quickStatCurrent');
  const quickStatTarget = document.getElementById('quickStatTarget');
  const quickStatNeeded = document.getElementById('quickStatNeeded');

  resultBox.classList.remove('safe', 'warning');
  statBox.classList.remove('safe', 'warning', 'active');

  if (isNaN(total) || isNaN(attendedRaw) || total <= 0 || attendedRaw < 0 || attendedRaw > total) {
    resultBox.textContent = "⚠️ Please enter valid lecture numbers (Attended ≤ Total).";
    resultBox.classList.add('active', 'warning');
    progressWrap.classList.remove('active');
    quickStatCurrent.querySelector('.quick-stat-value').textContent = '--%';
    quickStatTarget.querySelector('.quick-stat-value').textContent = required + '%';
    quickStatNeeded.querySelector('.quick-stat-value').textContent = '--';
    return;
  }

  const attended = Math.min(attendedRaw + grace, total);
  const currentPercent = (attended / total) * 100;
  const isSafe = currentPercent >= required;

  quickStatCurrent.querySelector('.quick-stat-value').textContent = currentPercent.toFixed(1) + '%';
  quickStatTarget.querySelector('.quick-stat-value').textContent = required + '%';

  const fillPercent = Math.min(currentPercent, 100);
  progressFill.style.width = fillPercent + '%';
  progressFill.classList.remove('safe', 'warning');
  progressFill.classList.add(isSafe ? 'safe' : 'warning');
  progressMarker.style.left = Math.min(required, 100) + '%';
  currentLabel.textContent = currentPercent.toFixed(1) + '%';
  requiredLabel.textContent = 'Target: ' + required + '%';
  progressWrap.classList.add('active');

  const graceNote = grace > 0 ? ` (includes ${grace} grace lecture${grace > 1 ? 's' : ''})` : '';

  if (isSafe) {
    let maxSkippable = 0;
    let a = attended, t = total;
    while (((a) / (t + 1)) * 100 >= required) {
      maxSkippable++;
      t++;
    }
    resultBox.textContent = `✅ You're at ${currentPercent.toFixed(1)}% attendance${graceNote}, which meets the ${required}% requirement. You can afford to miss up to ${maxSkippable} more lecture(s) and still stay at or above ${required}%.`;
    resultBox.classList.add('safe');
    statBox.classList.add('safe', 'active');
    statNumber.textContent = maxSkippable;
    statLabel.textContent = `can miss`;
    quickStatNeeded.querySelector('.quick-stat-value').textContent = maxSkippable;
    quickStatNeeded.querySelector('.quick-stat-label').textContent = 'Can Miss';
  } else {
    let needed = 0;
    let a = attended, t = total;
    while (((a + needed) / (t + needed)) * 100 < required) {
      needed++;
      if (needed > 100000) break;
    }
    resultBox.textContent = `⚠️ You're at ${currentPercent.toFixed(1)}% attendance${graceNote}, below the ${required}% requirement. You need to attend ${needed} more consecutive lecture(s) without missing any to reach ${required}%.`;
    resultBox.classList.add('warning');
    statBox.classList.add('warning', 'active');
    statNumber.textContent = needed;
    statLabel.textContent = `needed`;
    quickStatNeeded.querySelector('.quick-stat-value').textContent = needed;
    quickStatNeeded.querySelector('.quick-stat-label').textContent = 'Needed';
  }

  resultBox.classList.add('active');
}
