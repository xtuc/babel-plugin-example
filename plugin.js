module.exports = function ({types: t}) {
  return {
    visitor: {
      StringLiteral({node}) {
        node.value = "bar";
      }
    }
  }
}
