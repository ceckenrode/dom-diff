import realNode from '../util/real-node';

export default function (src, dst, data) {
  realNode(src).removeAttribute(data.name);
}
