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
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-48 max-w-48 object-contain lg:col-span-1 rounded-sm"
            style={{borderRadius:"40px", boxShadow:"1px 1px 20px rgba(255,255,255,0.2)"}}
            src={linkedlist}
            alt="linkedlist"
            width={350}
            height={350}
          />
          <img
            className="col-span-2 max-h-48 max-w-48 object-contain lg:col-span-1"
            style={{borderRadius:"40px", boxShadow:"1px 1px 20px rgba(255,255,255,0.2)"}}
            src={hashingdsa}
            alt="hashingdsa"
            width={350}
            height={350}
          />
          <img
            className="col-span-2 max-h-48 max-w-48 object-contain lg:col-span-1"
            style={{borderRadius:"40px", boxShadow:"1px 1px 20px rgba(255,255,255,0.2)"}}
            src={array}
            alt="array"
            width={350}
            height={350}
          />
          <img
            className="col-span-2 max-h-48 max-w-48 object-contain sm:col-start-2 lg:col-span-1"
            style={{borderRadius:"40px", boxShadow:"1px 1px 20px rgba(255,255,255,0.2)"}}
            src={stack}
            alt="stack"
            width={350}
            height={350}
          />
          <img
            className="col-span-2 max-h-48 max-w-48 object-contain sm:col-start-auto lg:col-span-1"
            style={{borderRadius:"40px", boxShadow:"1px 1px 20px rgba(255,255,255,0.2)"}}
            src={queue}
            alt="queue"
            width={350}
            height={350}
          />
          <img
            className="col-span-2 max-h-48 max-w-48 object-contain sm:col-start-auto lg:col-span-1"
            style={{borderRadius:"40px", boxShadow:"1px 1px 20px rgba(255,255,255,0.2)"}}
            src={string}
            alt="string"
            width={350}
            height={350}
          />
          <img
            className="col-span-2 max-h-48 max-w-48 object-contain sm:col-start-auto lg:col-span-1"
            style={{borderRadius:"40px", boxShadow:"1px 1px 20px rgba(255,255,255,0.2)"}}
            src={graph}
            alt="graph"
            width={350}
            height={350}
          />
          <img
            className="col-span-2 max-h-48 max-w-48 object-contain sm:col-start-auto lg:col-span-1"
            style={{borderRadius:"40px", boxShadow:"1px 1px 20px rgba(255,255,255,0.2)"}}
            src={map}
            alt="map"
            width={350}
            height={350}
          />
          <img
            className="col-span-2 max-h-48 max-w-48 object-contain sm:col-start-auto lg:col-span-1"
            style={{borderRadius:"40px", boxShadow:"1px 1px 20px rgba(255,255,255,0.2)"}}
            src={trie}
            alt="trie"
            width={350}
            height={350}
          />
          <img
            className="col-span-2 max-h-48 max-w-48 object-contain sm:col-start-auto lg:col-span-1"
            style={{borderRadius:"40px", boxShadow:"1px 1px 20px rgba(255,255,255,0.2)"}}
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
