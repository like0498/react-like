
/**
 * 树操作工具类
 */
export class TreeTool<T>{
  constructor(getChildren:(dataNode: T) => T[] | undefined | null){
    this.getChildren = getChildren;
  }
  getChildren: (dataNode: T) => T[] | undefined | null;

  /**
   * 深度优先遍历
   * @param tree 
   * @param callback 
   */
  foreachByDepth(tree: T[], callback: (dataNode: T) => void){
    tree.map(item => {
      const children = this.getChildren(item);
      if(children?.length){
        this.foreachByDepth(children, callback);
      }
      callback(item);
    })
  }

  /**
   * 广度优先遍历
   * @param tree 
   * @param callback 
   */
  foreachByBreadth(tree: T[], callback: (dataNode: T) => void){
    let node: T, list: T[] = [...tree];
    while(node = list.shift()){
      callback(node);
      const children = this.getChildren(node);
      children?.length && list.push(...children);
    }
  }

  /**
   * 深度优先查找
   * @param tree 
   * @param callback 
   * @returns 
   */
  findByDepth(tree: T[], callback: (dataNode: T) => boolean){
    let node: T, list: T[] = [...tree];
    while(node = list.shift()){
      if(callback(node)) return node;
      const children = this.getChildren(node);
      children?.length && list.unshift(...children);
    }
  }

  /**
   * 广度优先查找
   * @param tree 
   * @param callback 
   */
  findByBreadth(tree: T[], callback: (dataNode: T) => boolean){
    let node: T, list: T[] = [...tree];
    while(node = list.shift()){
      if(callback(node)) return node;
      const children = this.getChildren(node);
      children?.length && list.push(...children);
    }
  }

  add(tree: T[], callback: (dataNode: T) => boolean, data: T, childrenKey: string = 'children'){
    if(!tree || !tree.length) return;

    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if(callback(node)){
        node[childrenKey] instanceof Array ? node[childrenKey].push(data) : node[childrenKey] = [data];
        break;
      }
      this.add(this.getChildren(node), callback, data, childrenKey);
    }
  }

  remove(tree: T[], callback: (dataNode: T) => boolean){
    if(!tree || !tree.length) return;

    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if(callback(node)){
        tree.splice(i, 1)
        break;
      }
      this.remove(this.getChildren(node), callback);
    }
  }

  /**
   * 过滤树数据，返回新树
   * @param tree 
   * @param callback 
   * @param childrenKey 
   * @returns 
   */
  filter(tree: T[], callback: (dataNode: T) => boolean, childrenKey: string = 'children'): T[]{
    return tree.map(item => ({...item})).filter(node => {
      node[childrenKey] = node[childrenKey]?.length && this.filter(node[childrenKey], callback, childrenKey);
      return callback(node);
    })
  }
  /**
   * 过滤树数据（保持原本的树形结构），返回新树
   * @param tree 
   * @param callback 
   * @param childrenKey 
   * @returns 
   */
  filterTree(tree: T[], callback: (dataNode: T) => boolean, childrenKey: string = 'children'): T[]{
    return tree.map(item => ({...item})).filter(node => {
      node[childrenKey] = node[childrenKey]?.length && this.filterTree(node[childrenKey], callback, childrenKey);
      return callback(node) || node[childrenKey]?.length;
    })
  }
}