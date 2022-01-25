function postedBy(parent, args, context) {
    return context.prisma.video
      .findUnique({ where: { id: parent.id } })
      .postedBy();
  }
  
  function vidVotes(parent, args, context) {
    return context.prisma.video
      .findUnique({ where: { id: parent.id } })
      .vidVotes();
  }
  
  module.exports = {
    postedBy,
    vidVotes
  };