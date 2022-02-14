func solution(_ x:Int, _ n:Int) -> [Int] {
    var listArray: [Int] = [x];
    for _ in 0..<n-1 {
        listArray.append(listArray.last! + x)
    }
    return listArray
}
