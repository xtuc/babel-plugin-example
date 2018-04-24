module.exports = function ({types: t}) {
  return {
    visitor: {
      CallExpression(path) {
        const {node} = path;

        if (t.isIdentifier(node.callee, {name: "log"})) {
          const consoleLog = t.memberExpression(
            t.identifier("console"),
            t.identifier("log")
          );

          node.callee = consoleLog;
        }
      }
    }
  }
}
