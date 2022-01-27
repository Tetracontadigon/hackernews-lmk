function links(parent, args, context) {
  return context.prisma.user
    .findUnique({ where: { id: parent.id } })
    .links();
}

function pics(parent, args, context) {
  return context.prisma.user
    .findUnique({ where: { id: parent.id } })
    .pics();
}

module.exports = {
  links,
  pics
};
