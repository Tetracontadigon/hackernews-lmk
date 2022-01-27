async function feed(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [
          { description: { contains: args.filter } },
          { url: { contains: args.filter } },
          { tag: { contains: args.filter } }
        ]
      }
    : {};

  const links = await context.prisma.link.findMany({
    where,
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy
  });

  const videos = await context.prisma.video.findMany({
    where,
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy
  });

  const users = await context.prisma.user.findMany();
  const count = await context.prisma.link.count({ where });
  const pics = await context.prisma.pic.findMany({ where });
  const vidcount = await context.prisma.video.count({ where });

  //const countUser = await context.prisma.user.count({ where });

  return {
    id: 'main-feed',
    links,
    videos,
    users,
    vidcount,
    pics,
    count
  };
}

module.exports = {
  feed
};
