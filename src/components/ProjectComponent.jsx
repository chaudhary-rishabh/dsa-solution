import yogice from "../images/yogiceproject.png"
import iflick from "../images/iflickproject.png"

const posts = [
  {
    id: 1,
    title: 'Ecommerce Iflick',
    href: '#',
    description:
      'description of project here  3-4 lines breif explained with tools and technologies',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'source', href: 'https://github.com/chaudhary-rishabh/chaudharyrishabh' },
    author: {
      href: '#',
      imageUrl: iflick,
        
    },
  },
  {
    id: 2,
    title: 'Fitness Mefit',
    href: '#',
    description:
      'description of project here  3-4 lines breif explained with tools and technologies',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'source', href: 'https://github.com/chaudhary-rishabh/chaudharyrishabh' },
    author: {
      href: '#',
      imageUrl: yogice,
        
    },
  },
  {
    id: 3,
    title: 'My Portfolio',
    href: '#',
    description:
      'description of project here  3-4 lines breif explained with tools and technologies',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'source', href: 'https://github.com/chaudhary-rishabh/chaudharyrishabh' },
    author: {
      href: 'https://chaudharyrishabh.com/',
      imageUrl: yogice,
        
    },
  },
  {
    id: 4,
    title: 'Check it TODO',
    href: '#',
    description:
      'description of project here  3-4 lines breif explained with tools and technologies',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'source', href: 'https://github.com/chaudhary-rishabh/chaudharyrishabh' },
    author: {
      href: '#',
      imageUrl: yogice,
        
    },
  },
  {
    id: 5,
    title: 'Ecommerce Yogice',
    href: '#',
    description:
      'description of project here  3-4 lines breif explained with tools and technologies',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'source', href: 'https://github.com/chaudhary-rishabh/chaudharyrishabh' },
    author: {
      href: '#',
      imageUrl:yogice,
        
    },
  },
  {
    id: 6,
    title: 'Scheduler scheduler',
    href: '#',
    description:
      'description of project here  3-4 lines breif explained with tools and technologies',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'source', href: 'https://github.com/chaudhary-rishabh/chaudharyrishabh' },
    author: {
      href: '#',
      imageUrl:yogice,
    },
  },
  {
    id: 7,
    title: 'Ordering GrillIt',
    href: '#',
    description:
      'description of project here  3-4 lines breif explained with tools and technologies',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'source', href: 'https://github.com/chaudhary-rishabh/chaudharyrishabh' },
    author: {
      href: '#',
      imageUrl: yogice,
    },
  },
]

export default function ProjectComponent() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">My Work</h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-300">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-200">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-90 w-auto rounded-xl bg-gray-50" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
