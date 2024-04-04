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

export default function AlgorithmsPreview() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-48 max-w-48 object-contain lg:col-span-1 rounded-sm"
            style={{borderRadius:"40px", boxShadow:"3.8px 7.7px 7.7px hsl(0deg 0% 0% / 0.38)"}}
            src={linkedlist}
            alt="linkedlist"
            width={350}
            height={350}
          />
          <img
            className="col-span-2 max-h-48 max-w-48 object-contain lg:col-span-1"
            style={{borderRadius:"40px", boxShadow:"4.1px 8.2px 8.2px hsl(0deg 0% 0% / 0.37)"}}
            src={hashingdsa}
            alt="hashingdsa"
            width={350}
            height={350}
          />
          <img
            className="col-span-2 max-h-48 max-w-48 object-contain lg:col-span-1"
            style={{borderRadius:"40px", boxShadow:"4.1px 8.2px 8.2px hsl(0deg 0% 0% / 0.37)"}}
            src={array}
            alt="array"
            width={350}
            height={350}
          />
          <img
            className="col-span-2 max-h-48 max-w-48 object-contain sm:col-start-2 lg:col-span-1"
            style={{borderRadius:"40px", boxShadow:"4.1px 8.2px 8.2px hsl(0deg 0% 0% / 0.37)"}}
            src={stack}
            alt="stack"
            width={350}
            height={350}
          />
          <img
            className="col-span-2 max-h-48 max-w-48 object-contain sm:col-start-auto lg:col-span-1"
            style={{borderRadius:"40px", boxShadow:"4.1px 8.2px 8.2px hsl(0deg 0% 0% / 0.37)"}}
            src={queue}
            alt="queue"
            width={350}
            height={350}
          />
          <img
            className="col-span-2 max-h-48 max-w-48 object-contain sm:col-start-auto lg:col-span-1"
            style={{borderRadius:"40px", boxShadow:"4.1px 8.2px 8.2px hsl(0deg 0% 0% / 0.37)"}}
            src={string}
            alt="string"
            width={350}
            height={350}
          />
          <img
            className="col-span-2 max-h-48 max-w-48 object-contain sm:col-start-auto lg:col-span-1"
            style={{borderRadius:"40px", boxShadow:"4.1px 8.2px 8.2px hsl(0deg 0% 0% / 0.37)"}}
            src={graph}
            alt="graph"
            width={350}
            height={350}
          />
          <img
            className="col-span-2 max-h-48 max-w-48 object-contain sm:col-start-auto lg:col-span-1"
            style={{borderRadius:"40px", boxShadow:"4.1px 8.2px 8.2px hsl(0deg 0% 0% / 0.37)"}}
            src={map}
            alt="map"
            width={350}
            height={350}
          />
          <img
            className="col-span-2 max-h-48 max-w-48 object-contain sm:col-start-auto lg:col-span-1"
            style={{borderRadius:"40px", boxShadow:"4.1px 8.2px 8.2px hsl(0deg 0% 0% / 0.37)"}}
            src={trie}
            alt="trie"
            width={350}
            height={350}
          />
          <img
            className="col-span-2 max-h-48 max-w-48 object-contain sm:col-start-auto lg:col-span-1"
            style={{borderRadius:"40px", boxShadow:"4.1px 8.2px 8.2px hsl(0deg 0% 0% / 0.37)"}}
            src={binarytree}
            alt="binarytree"
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  )
}
