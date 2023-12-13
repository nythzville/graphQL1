import User from "./models/User.js";
// GraphQL Resolvers
const resolvers = {
    Query: {
        users: async () => await User.find({}),
        user: async (parent, args) => await User.findById(args.id),
    },
    Mutation: {
        create: async (parent, args) => {
          const { name, email, password } = args;
          const newUser = new User({
            name,
            email,
            password,
          });
          await newUser.save();
          return newUser;
        },
        update: async (parent, args) => {
            const { id } = args;
            const result = await User.findByIdAndUpdate(id, args);
            return result;
        },
        delete: async (parent, args) => {
            const { id } = args;
            const deletedStudent = await User.findByIdAndDelete(id);
            if (!deletedStudent) {
              throw new Error(`User with ID ${id} not found`);
            }
            return deletedStudent;
        },
    }
};
export { resolvers }
