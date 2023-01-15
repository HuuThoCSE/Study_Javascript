# hmmm
- Có ; hay không cũng được, dự án lớn thì phải ;

"String"
'c'
``

"" & '' coi như là 1

"String"[2] => Chuổi như mảng ta có thể lấy ký tự 

# Chạy chương trình
```js
console.log('Hello world!')
```

# Hmmm
- NaN: Not a number

# Khai báo biến
## Phiên bản củ
var Biến
Ví dụ:
```js
var str = "abcd";
var num = 4;
```
## Phiên bản mới


# Chữ và số
```js
var str "abcd";
var num = 2;
console.log(str, num)

num = "2";
console.log(str, num)
```




## So sánh Var và Let
- Let là một biến số, có thẻ thay đỏi dươc trong số quá trình thực thi lệnh
```js
var varlable1 = "Ông nội" // Nó là biến (tứ là thay đổi được), nó có thể tái tạo được
varlable1 = "Diễm my"
console.log(varlable1)

var varlable1 = 4.4; // In ra bth
console.log(varlable1)

let varlable2 = "Ông nội" //! Khác biệt: Không thể tái tạo được
console.log(varlable2)

let varlable2 = "Diễm my"
console.log(varlable2)

varlable2 = 4.4;
console.log(varlable2) // Error

const varlable
```

# String
- Đầu tiên: Không phân biệt Character và String
- Có có loại dấu riêng ('), ("), (`)
- Có các method giống y chang như là các loại ngôn ngữ khác
- ! toLowerCase, toUpperCase,..
- Nó sẽ dùng các backslash (\) để xử lý các loại ký tự đặt biệt
- (\n), (\\), (\b), (\'), (\)
# Number
## Hằng số
- Là một hằng số, không thể thay đổi được trong suốt quá trình thực thi lệnh.
- Có thẻ tái khai báo lại ở trong một cái scope(phạm vi khác) khác
```js
const PI = 3.14 // Là hằng số => không thay đổi

console.log(PI)

PI = 5;
console.log(PI) // Error: 

{ // Không sử dụng được biến bên ngoài
    console.log(PI)
    const PI = 5; // Error:

    console.log(PI)
}

```

# Array (Mở rộng thêm)

## Phân biệt giữa object và array
```js
varlabe2 = {abc: "hello", num: 1}
console.log(varlable2)

varlabe2 = ["hello", 1]
console.log(varlable2)
```

# Danh mục bài tập 
1. 