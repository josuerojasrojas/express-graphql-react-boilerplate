const Mutation = {
  exampleMutation: (_, { input }) => {
    return {
      key: "thisisakey",
      name: "thisisaname",
      input: input,
    };
  },
};

module.exports = Mutation;
