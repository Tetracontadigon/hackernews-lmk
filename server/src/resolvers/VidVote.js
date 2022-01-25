function video(parent, args, context) {
  return context.prisma.vidVote
    .findUnique({ where: { id: parent.id } })
    .video();
}

module.exports = {
  video
};
