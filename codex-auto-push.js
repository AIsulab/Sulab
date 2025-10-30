// ⚙️ Codex 작업 완료 시 자동 Commit & Push 스크립트 (SULAB 전용)
const { exec } = require("child_process");
const path = require("path");

const repoPath = "C:/SULAB-main/SULAB-main";
const commitMessage = `🧠 Auto Commit by SULAB ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}`;

// Codex 작업 완료 이벤트 훅
vscode.commands.registerCommand("codex.onTaskComplete", async () => {
  try {
    exec(
      `cd ${repoPath} && git add . && git commit -m "${commitMessage}" && git push origin main`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`❌ Commit Error: ${error.message}`);
          return;
        }
        console.log(stdout);
        vscode.window.showInformationMessage("✅ Auto Commit & Push Complete!");
      }
    );
  } catch (err) {
    console.error("❌ Codex Hook Error:", err);
  }
});
