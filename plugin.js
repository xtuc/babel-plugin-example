const template = require("@babel/template").default;

const wrapper = template(`
  asyncWrapper(FUNCTION)
`);

module.exports = function ({types: t}) {
  return {
    visitor: {
      FunctionDeclaration(path) {
        const node = path.node;

        if (node.leadingComments) {
          const [firstComment] = node.leadingComments;

          if (firstComment.value === " @async") {
            const ast = wrapper({
              FUNCTION: t.toExpression(node)
            });

            path.replaceWith(ast);
            path.stop();
          }
        }
      }
    }
  }
}
