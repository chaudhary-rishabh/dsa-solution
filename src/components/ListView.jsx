import linkedlist from "../images/linkedlist-dsa.jpeg"
import array from "../images/array-dsa.jpeg"
import string from "../images/string-dsa.jpeg"
import queue from "../images/queue-dsa.jpeg"
import stack from "../images/stack-dsa.jpeg"
import trie from "../images/trie-dsa.jpeg"
import map from "../images/map-dsa2.jpeg"
import graph from "../images/graph-dsa.jpeg"
import hashingdsa from "../images/hashing-dsa.jpeg"
import binarytree from "../images/binarytree-dsa.jpeg"
import searching from "../images/rishabhdev7.jpeg"
import sorting from "../images/rishabhdev8.jpeg"


const people = [
  {
    name: ' ',
    email: ' ',
    imageUrl:'',
  },
  {
    name: ' ',
    email: ' ',
    imageUrl:
      '',
  },
  {
    name: 'Array',
    icon: '&#10230;',
    imageUrl:array,
  },
  {
    name: 'String',
    icon: '&#10230;',
    imageUrl:string,
  },
  {
    name: 'Stack',
    icon: '&#10230;',
    imageUrl:stack,
  },
  {
    name: 'Queue',
    icon: '&#10230;',
    imageUrl:queue,
  },
  {
    name: 'LinkedList',
    icon: '&#10230;',
    imageUrl:linkedlist,
  },
  {
    name: 'Map',
    icon: '&#10230;',
    imageUrl: map,
  },
  {
    name: 'Graph',
    icon: '&#10230;',
    imageUrl:graph,
  },
  {
    name: 'Tree',
    icon: '&#10230;',
    imageUrl:binarytree,
  },
  {
    name: 'Trie',
    icon: '&#10230;',
    imageUrl:trie,
  },
  {
    name: 'Hashing',
    icon: '&#10230;',
    imageUrl:hashingdsa,
  },
  {
    name: 'Sorting',
    icon: '&#10230;',
    imageUrl:sorting,
  },
  {
    name: 'Searching',
    icon: '&#10230;',
    imageUrl:searching,
  },
]

export default function ListView() {
  return (
    <ul role="list" className="divide-y bg-black divide-black">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            {person.imageUrl !== '' ? (<img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /> ): (<p></p>)}
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-white">{person.name}</p>
              {person.imageUrl !== '' ? (<p className="text-xs leading-5 cursor-pointer text-blue-500">Explore all &#10230;</p> ): (<p></p>)}
              
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
